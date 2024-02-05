import * as React from "react";
import {PlasmicParticipationArea} from "./plasmic/fusion_lab/PlasmicParticipationArea";
import {Controllers, Hands, TeleportationPlane, VRButton, XR} from "@react-three/xr";
import {Canvas} from "@react-three/fiber";
import {useCallback, useContext, useEffect, useState} from "react";
import Control from "./Control";
import Scene from "./Scene";
import Comment from "./Comment";
import {Environment} from "@react-three/drei";
import MyContext from "../MyContext";

function ParticipationArea_(props, ref) {
    const {state, updateState} = useContext(MyContext);

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

    //ToDo Koray: get comments from DB
    const getCommentsFromDB = useCallback(() => {
        return [
            {
                likes: 45,
                text: "I really like the boldering walls under the bridge!",
                cameraPosition: {x: 0, y: 2, z: 0},
                commentPosition: {x: 0, y: 2, z: 0},
                likedByUser: false
            },
            {
                likes: 23,
                text: "With so less parking I have to search for a parking spot for hours!",
                cameraPosition: {x: 0, y: 2, z: 0},
                commentPosition: {x: 0, y: 2, z: 0},
                likedByUser: true
            }
        ];
    }, []);

    const getLikesFromDB = () => {
        //ToDo Koray: After getting the comments likedByUser should be set to true if the user liked the comment
        state.userID && console.log("User ID: " + state.userID);
        setComments(comments);
    };

    //ToDo Koray: add comment to DB
    const addCommentDB = useCallback((newComment) => {
        state.userID && console.log("User ID: " + state.userID);
        setComments([...comments, newComment]);
    }, [comments, state.userID]);

    const changeLike = useCallback((comment) => {
        //ToDo Koray: increase or decrease likes in DB
        state.userID && console.log("User ID: " + state.userID);
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
        let comments = getCommentsFromDB();
        setComments(comments);
    }, [getCommentsFromDB]);

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
                                <Environment preset="sunset"/>
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
