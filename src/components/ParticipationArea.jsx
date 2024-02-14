import * as React from "react";
import {PlasmicParticipationArea} from "./plasmic/fusion_lab/PlasmicParticipationArea";
import {Canvas} from "@react-three/fiber";
import {Suspense, useCallback, useContext, useEffect, useState} from "react";
import Control from "./Control";
import Scene from "./Scene";
import Comment from "./Comment";
import supabaseClient from '../supabaseClient';
//import { SupabaseClient } from "@supabase/supabase-js";

function ParticipationArea_(props, ref) {
    const {state} = useContext(MyContext);

    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    //ToDo Mohammad: set initial camera position and direction so that the user is looking at the bridge
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

    const getCommentsFromDB = async () => {
        try {
          // Make a request to the get_comments PostgreSQL function
          const { data, error } = await supabaseClient.rpc('get_comments');
      
          if (error) {
            console.error("Error getting comments from DB:", error.message);
            return [];
          }
      
          // Map the data to the expected format
          const comments = data.map(comment => ({
            likes: comment.likesCount,
            text: comment.commentText,
            username: comment.userId, // Replace with the actual field containing usernames
            commentPosition: comment.modelLocation, // Replace with the actual field containing comment positions
            likedByUser: false // You may need to implement this based on user likes
          }));
      
          return comments;
        } catch (error) {
          console.error("Error:", error.message);
          return [];
        }
      };

    const addCommentToDB = async (createdByUserId, commentText, modelLocation) => {
        try {
          // Make a request to the PostgreSQL function add_comment
          const { data, error } = await supabaseClient.rpc('add_comment', {
            p_created_by_user_id: createdByUserId,
            p_comment_text: commentText,
            p_model_location: modelLocation,
          });
      
          if (error) {
            console.error("Error adding comment to DB:", error.message);
          } else {
            console.log("Comment added successfully:", data);
            return data; // You might want to return the added comment or its ID
          }
        } catch (error) {
          console.error("Error:", error.message);
          return null;
        }
    }

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

        const fetchData = async () => {
            try {
                const comments = await getCommentsFromDB();
                setComments(comments);
            } catch (error) {
                console.error("Error fetching comments:", error);
                setComments([]); // Set an empty array or handle the error accordingly
            }
        };
    
        fetchData();
    }, []); // Empty dependency array
    

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
                    addCommentToDB(newComment);
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

