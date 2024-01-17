import * as React from "react";
import {useFrame, useThree} from '@react-three/fiber';
import {useLoader} from "@react-three/fiber";
import {Gltf, Html, Sky} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Suspense, useEffect, useRef, useState} from "react";
import {IFCLoader} from "web-ifc-three";
import {DoubleSide, Vector3} from "three";
import FavComment from "./FavComment";
import Display from "./Display";
import PopUpGallery from "./PopUpGallery";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
        // @ts-ignore
        <primitive object={gltf.scene} scale={0.4}/>
    );
};

export default function Scene({handleCameraChange}) {
    const [comments, setComments] = useState([]);
    const addComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    const camera = useThree((state) => state.camera);
    const raycaster = useThree((state) => state.raycaster);

    useFrame(() => {
        if (camera && false) {
            handleCameraChange({position: camera.position, direction: camera.getWorldDirection(new Vector3())});
        }
    });


    useEffect(() => {
        let comments =
            [{likes: "test", text: "test", username: "test", commentPosition: [-4.5, 3.6, -3]}, {
                likes: "test",
                text: "test",
                username: "test",
                commentPosition: [-4.5, 10.6, -3]
            }];
        setComments(comments);
    }, []);


    const mesh = useRef();
    const [ifcCategorySubsets, setIfcCategorySubsets] = useState({});
    const ifc = useLoader(IFCLoader, "/FusionLab_TeamC_01.ifc", (ifcLoader) => {
        ifcLoader.ifcManager.setWasmPath("../../wasm/");
    });

    return (
        <>
            <pointLight position={[400, 400, 0]} intensity={0.5} color="white"/>
            <pointLight position={[-400, 400, 0]} intensity={0.3} color="white"/>
            <pointLight position={[0, 400, -400]} intensity={0.4} color="white"/>
            <pointLight position={[0, 400, 400]} intensity={0.2} color="white"/>
            <Suspense fallback={null}>
                <primitive object={ifc} onDoubleClick={(e) => {
                    const intersected = raycaster.intersectObject(e.eventObject);
                    const pointVector = intersected[0].point;
                    const cameraVector = camera.position;
                    addComment({
                        likes: "test",
                        text: "test",
                        username: "test",
                        commentPosition: pointVector,
                        cameraPosition: cameraVector
                    })
                }}/>
                <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>
                {comments.map((comment, index) => <Annotation key={index} comment={comment}/>, [])}
            </Suspense>
        </>
    )
}

function Annotation({comment, children, ...props}) {
    const {commentPosition} = comment;
    return (
        <Html
            {...props}
            position={commentPosition}
            occlude
            castShadow
            receiveShadow
            transform
            geometry={
                <roundedPlaneGeometry args={[1.66, 0.47, 0.24]}/>
            }
            scale={0.5}
            material={
                <meshPhysicalMaterial
                    side={DoubleSide}
                    opacity={0.1}
                />
            }
        >
            <FavComment comment={comment}>
            </FavComment>
        </Html>
    )
}
