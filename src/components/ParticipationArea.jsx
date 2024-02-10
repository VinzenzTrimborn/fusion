import * as React from "react";
import {PlasmicParticipationArea} from "./plasmic/fusion_lab/PlasmicParticipationArea";
import {ARButton, Controllers, XR} from "@react-three/xr";
import {Canvas} from "@react-three/fiber";
import {Suspense, useCallback, useContext, useEffect, useState} from "react";
import Control from "./Control";
import Scene from "./Scene";
import Comment from "./Comment";
import {Environment, Loader} from "@react-three/drei";
import MyContext from "../MyContext";

function ParticipationArea_(props, ref) {
    const {state} = useContext(MyContext);

    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    //ToDo Mohammad: set initial camera position and direction so that the user is looking at the bridge
    const [cameraPosition, setCameraPosition] = useState({
        x: 436.244272848507,
        y: 3.800000000000114,
        z: -850.2200189272153
    });
    const [cameraDirection, setCameraDirection] = useState({
        x: 466.2775224746772,
        y: -10.26822693003901,
        z: -755.879736396702
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

    const getCommentsFromDB = useCallback(() => {
        //ToDo Koray: get comments from DB
        return [
            {
                id: 1,
                likes: 45,
                text: "I really like the boldering walls under the bridge!",
                cameraPosition: {x: 0, y: 2, z: 0},
                commentPosition: {x: 0, y: 2, z: 0}
            },
            {
                id: 2,
                likes: 23,
                text: "With so less parking I have to search for a parking spot for hours!",
                cameraPosition: {x: 0, y: 2, z: 0},
                commentPosition: {x: 0, y: 2, z: 0}
            }
        ];
    }, []);

    const getLikesFromDB = useCallback((comments, userID) => {
        console.log("User ID: " + userID);
        //ToDo Koray: Get the liked comments of userID from the DB
        const likedCommentsIDs = [1, 2];

        return comments.map((c) => {
            if (likedCommentsIDs.includes(c.id)) {
                return {...c, likedByUser: true};
            }
            return {...c, likedByUser: false};
        });
    }, []);

    const addCommentDB = useCallback((newComment) => {
        console.log("User ID: " + state.userID);
        //ToDo Koray: add comment to DB and associate it with the userID and return the comment ID
        // Set the comment ID here
        newComment.id = comments.length + 1;

        // Update comments in the frontend
        setComments([newComment, ...comments]);
    }, [comments, state.userID]);

    const changeLike = useCallback((comment) => {
        //ToDo Koray: increase or decrease likes in DB
        console.log("User ID: " + state.userID);
        console.log("Comment ID: " + comment.id);
        // If the comment was liked by the user, then decrease the likes, else increase the likes
        console.log("Liked by user: " + comment.likedByUser);

        // Update like in the frontend
        const newComments = comments.map((c) => {
            if (c === comment && !c.likedByUser) {
                return {...c, likes: c.likes + 1, likedByUser: true};
            } else if (c === comment && c.likedByUser) {
                return {...c, likes: c.likes - 1, likedByUser: false};
            }
            return c;
        });
        setComments(newComments);
    }, [comments, state.userID]);

    useEffect(() => {
        if (state.userID) {
            let comments = getCommentsFromDB();
            comments = getLikesFromDB(comments, state.userID);
            setComments(comments);
        }
    }, [getCommentsFromDB, state.userID, getLikesFromDB]);

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
                        <ARButton/>
                        <Suspense fallback={<span>loading...</span>}>
                            <Canvas>
                                <XR referenceSpace="local">
                                    <Controllers/>
                                    <Scene handleCameraChange={handleCameraChange}/>
                                    <Control lookAt={cameraDirection} position={cameraPosition}/>
                                    <Environment preset="sunset"/>
                                </XR>
                            </Canvas>
                        </Suspense>
                        <Loader/>
                    </>
                )
            }}

            //ToDO Mohammad: choose nice camera positions
            viewButton1={{
                onClick: () => {
                    console.log("viewButton1");
                    setCameraDirection({x: 0, y: 2, z: 0});
                    setCameraPosition({x: 0, y: 2, z: 0});
                }
            }}
            viewButton2={{
                onClick: () => {
                    setCameraDirection({x: 5, y: 5, z: 5});
                    setCameraPosition({x: 0, y: 2, z: 0});
                }
            }}
            viewButton3={{
                onClick: () => {
                    setCameraDirection({x: 10, y: 12, z: 10});
                    setCameraPosition({x: 0, y: 2, z: 0});
                }
            }}
            viewButton4={{
                onClick: () => {
                    setCameraDirection({x: 20, y: 22, z: 20});
                    setCameraPosition({x: 0, y: 2, z: 0});
                }
            }}
            viewButton5={{
                onClick: () => {
                    setCameraDirection({x: 30, y: 32, z: 30});
                    setCameraPosition({x: 0, y: 2, z: 0});
                }
            }}
        />
    )
}

const ParticipationArea = React.forwardRef(ParticipationArea_);

export default ParticipationArea;
