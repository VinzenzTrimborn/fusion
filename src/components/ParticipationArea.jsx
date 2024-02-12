import * as React from "react";
import {PlasmicParticipationArea} from "./plasmic/fusion_lab/PlasmicParticipationArea";
import {Controllers, Hands, TeleportationPlane, VRButton, XR} from "@react-three/xr";
import {Canvas} from "@react-three/fiber";
import {useCallback, useEffect, useState} from "react";
import Control from "./Control";
import Scene from "./Scene";
import Comment from "./Comment";
import supabaseClient from '../supabaseClient';
//import { SupabaseClient } from "@supabase/supabase-js";

function ParticipationArea_(props, ref) {
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

    //ToDo Mohammad: set initial camera position and direction so that the user is looking at the bridge
    const [cameraPosition, setCameraPosition] = useState({x: 0, y: 2, z: 0});
    const [cameraDirection, setCameraDirection] = useState({x: 0, y: 2, z: 0});

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
        const newComments = comments.map((c) => {
            if (c === comment && !c.likedByUser) {
                return {...c, likes: c.likes + 1, likedByUser: true};
            }else if(c === comment && c.likedByUser){
                return {...c, likes: c.likes - 1, likedByUser: false};
            }
            return c;
        });
        setComments(newComments);
    }, [comments]);

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
                        username: "test",
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
                        <VRButton/>
                        <Canvas>
                            <XR>
                                <Controllers/>
                                <Hands/>
                                <TeleportationPlane
                                    leftHand={true}
                                    rightHand={false}
                                    maxDistance={10}
                                    size={0.25}
                                />
                                <Scene handleCameraChange={handleCameraChange}/>
                                <Control lookAt={cameraDirection} position={cameraPosition}/>
                            </XR>
                        </Canvas>
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

