import * as React from "react";
import {PlasmicParticipationArea} from "./plasmic/fusion_lab/PlasmicParticipationArea";
import {Canvas} from "@react-three/fiber";
import {Suspense, useCallback, useContext, useEffect, useState} from "react";
import Control from "./Control";
import Scene from "./Scene";
import Comment from "./Comment";
import {Loader} from "@react-three/drei";
import MyContext from "../MyContext";
import supabaseClient from '../supabaseClient';

function ParticipationArea_(props, ref) {
    const {state} = useContext(MyContext);

    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    const [cameraPosition, setCameraPosition] = useState({
        x: 307.34795619787735,
        y: 44.0000000000001,
        z: -738.5631267093869
    });
    const [cameraDirection, setCameraDirection] = useState({
        x: 349.4698673885258,
        y: 17.408737917447446,
        z: -651.8529809448679
    });

    const [currentCameraPosition, setCurrentCameraPosition] = useState(null);
    const [currentCameraDirection, setCurrentCameraDirection] = useState(null);

    const handleCameraChange = useCallback(({position, direction}) => {
        setCurrentCameraPosition(position);
        setCurrentCameraDirection(direction);
    }, [setCurrentCameraPosition, setCurrentCameraDirection]);

    const lookAt = useCallback((position, direction) => {
        setCameraPosition(position);
        setCameraDirection(direction);
    }, []);

    const getCommentsFromDB = useCallback(async () => {
        try {
            let {data, error} = await supabaseClient
                .from('comments')
                .select('*')

            if (error) {
                console.error('Error fetching comments:', error)
                return [];
            }

            return data.map(comment => (
                {...comment, likedByUser: false}));
        } catch (error) {
            console.error("Error:", error.message);
            return [];
        }
    }, []);

    const getLikesFromDB = useCallback(async (comments, userId) => {
        const {data, error} = await supabaseClient
            .from('commentLikes')
            .select('commentId') // Select all columns
            .eq('userId', userId); // Where 'userId' equals the specified userId

        if (error) {
            console.error('Error fetching likes by userId:', error);
            return [];
        }

        const likedCommentsIDs = data.map(like => like.commentId);
        return comments.map((c) => {
            if (likedCommentsIDs.includes(c.id)) {
                return {...c, likedByUser: true};
            }
            return {...c, likedByUser: false};
        }).sort((a, b) => b.likes - a.likes);
    }, []);

    const addCommentDB = useCallback(async (comment) => {
        try {
            const {data, error} = await supabaseClient
                .from('comments')
                .insert([
                    {userId: state.userId, ...comment},
                ]).select('*').single();

            if (error) {
                console.error('Error creating comment:', error);
            }
            setComments([{...data, likedByUser: false}, ...comments])
        } catch (error) {
            console.error('Unexpected error creating comment:', error);
        }
    }, [comments, state.userId]);

    const changeLike = useCallback(async (comment) => {
        const newComments = comments.map((c) => {
            if (c.id === comment.id && !c.likedByUser) {
                return {...c, likes: c.likes + 1, likedByUser: true};
            } else if (c.id === comment.id && c.likedByUser) {
                return {...c, likes: c.likes - 1, likedByUser: false};
            }
            return c;
        });
        setComments(newComments);

        if (!comment.likedByUser) {
            const {error} = await supabaseClient
                .from('commentLikes')
                .upsert({
                    userId: state.userId,
                    commentId: comment.id
                }, {
                    onConflict: ['userId', 'commentId']
                });

            if (error) {
                console.error('Error upserting comment like:', error);
            }
        } else {
            const {error} = await supabaseClient
                .from('commentLikes')
                .delete()
                .match({userId: state.userId, commentId: comment.id});

            if (error) {
                console.error('Error deleting comment like:', error);
            }
        }
    }, [comments, state.userId]);

    useEffect(() => {

        async function getCommentsAndLikes(userId) {
            if (userId) {
                let comments = await getCommentsFromDB();
                comments = await getLikesFromDB(comments, userId);
                setComments(comments);
            }
        }

        getCommentsAndLikes(state.userId);
    }, [getCommentsFromDB, state.userId, getLikesFromDB]);

    return (
        <PlasmicParticipationArea
            root={{ref}}
            {...props}
            select={{
                onChange: (e) => {
                    console.log(e);
                },
                "aria-label": "Close dialog"
            }}
            commentSidebar={{
                children: comments.map((comment) => {
                    return <Comment comment={comment} lookAt={lookAt} changeLike={changeLike}/>;
                }, [])
            }}
            newCommentText={{
                value: input,
                onChange: (e) => setInput(e.target.value)
            }}
            sendButton={{
                onClick: () => {
                    if (input === "") return;
                    const newComment = {
                        likes: 0,
                        text: input,
                        cameraPosition: {
                            x: currentCameraPosition.x,
                            y: currentCameraPosition.y,
                            z: currentCameraPosition.z
                        },
                        commentPosition: {
                            x: currentCameraDirection.x,
                            y: currentCameraDirection.y,
                            z: currentCameraDirection.z
                        }
                    }
                    addCommentDB(newComment);
                    setInput("");
                }
            }}
            canvas={{
                render: () => (
                    <>
                        <Suspense fallback={<span>loading...</span>}>
                            <Canvas frameloop="demand">
                                <Scene handleCameraChange={handleCameraChange}/>
                                <Control lookAt={cameraDirection} position={cameraPosition}/>
                            </Canvas>
                        </Suspense>
                        <Loader/>
                    </>
                )
            }}

            viewButton1={{
                onClick: () => {
                    setCameraDirection({x: 398.80039307851337, y: 23.249553677850635, z: -611.7729937555855});
                    setCameraPosition({x: 420.60622612455626, y: 38.90000000000015, z: -515.4424732800601});
                }
            }}
            viewButton2={{
                onClick: () => {
                    setCameraDirection({x: 387.54429509762326, y: -1.278930541193028, z: -810.4633629984213});
                    setCameraPosition({x: 425.8909475550018, y: 2.1999999999999957, z: -718.1734324122377});
                }
            }}
            viewButton3={{
                onClick: () => {
                    setCameraDirection({x: 498.1259373981801, y: 8.716546999376632, z: -876.776868115613});
                    setCameraPosition({x: 432.68571896131675, y: 2.600000000000029, z: -801.4099943331611});
                }
            }}
            viewButton4={{
                onClick: () => {
                    setCameraDirection({x: 450.70048518555393, y: 8.716546999376645, z: -967.0143207863442});
                    setCameraPosition({x: 471.7986151207655, y: 2.600000000000029, z: -869.4568671190751});
                }
            }}
            viewButton5={{
                onClick: () => {
                    setCameraDirection({x: 375.26487451538895, y: -0.3146375520923086, z: -411.7373486937827});
                    setCameraPosition({x: 422.71381772105724, y: 2.6000000000001116, z: -323.7594953634973});
                }
            }}
        />
    )
}

const ParticipationArea = React.forwardRef(ParticipationArea_);

export default ParticipationArea;
