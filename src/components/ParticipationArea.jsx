import * as React from "react";
import {PlasmicParticipationArea} from "./plasmic/fusion_lab/PlasmicParticipationArea";
import {Controllers, Hands, TeleportationPlane, VRButton, XR} from "@react-three/xr";
import {Canvas} from "@react-three/fiber";
import {useCallback, useEffect, useState} from "react";
import Control from "./Control";
import Scene from "./Scene";
import Comment from "./Comment";

function ParticipationArea_(props, ref) {
    const [comments, setComments] = useState([]);
    const [input, setInput] = useState("");

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


    const getCommentsFromDB = useCallback(() => {
        return [
            {
                likes: 45,
                text: "Hi there!",
                username: "Vinzenz",
                cameraPosition: {x: 0, y: 2, z: 0},
                commentPosition: {x: 0, y: 2, z: 0}
            },
            {
                likes: 23,
                text: "Koray is the best!",
                username: "Koray",
                cameraPosition: {x: 0, y: 2, z: 0},
                commentPosition: {x: 0, y: 2, z: 0}
            }
        ];
    }, []);

    const addCommentDB = useCallback((newComment) => {

        setComments([...comments, newComment]);
    }, [comments]);

    const like = useCallback((comment) => {
        const newComments = comments.map((c) => {
            if (c === comment) {
                return {...c, likes: c.likes + 1};
            }
            return c;
        });
        setComments(newComments);
    }, [comments]);

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
                    return <Comment comment={comment} lookAt={lookAt} like={like}/>;
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
                    addCommentDB(newComment);
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
        />
    )
}

const ParticipationArea = React.forwardRef(ParticipationArea_);

export default ParticipationArea;
