import * as React from "react";
import {useFrame, useThree} from '@react-three/fiber';
import {useLoader} from "@react-three/fiber";
import {Gltf, Html, Sky} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Suspense, useEffect, useMemo, useRef, useState} from "react";
import {IFCLoader} from "web-ifc-three";
import {DoubleSide, MeshLambertMaterial, Vector3} from "three";
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
    const scene = useThree((state) => state.scene);
    const [highlightedIDs, setHighlightedIDs] = useState([]);

    useFrame(() => {
        if (camera) {
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
    const highlightedMaterial = useMemo(() => new MeshLambertMaterial({
        transparent: false,
        opacity: 0.6,
        color: 0xff88ff,
        depthTest: true,
    }), []);

    useEffect(() => {
        console.log("highlightedIDs", highlightedIDs);
        const manager = ifc.ifcManager;
        manager.createSubset({
            modelID: 0,
            ids: highlightedIDs,
            scene: scene,
            material: highlightedMaterial,
            removePrevious: true,
            customID: "highlightedMaterial"
        });
        return () => manager.removeSubset({
            modelID: 0,
            material: highlightedMaterial,
            customID: "highlightedMaterial"
        });
    }, [ifc, scene, highlightedIDs, highlightedMaterial]);

    useEffect(() => {
        const manager = ifc.ifcManager;

        const parseIFCCategories = async () => {
            const ifcCategoryOnExpressIDs = {};
            const ifcCategorySubsets = {};
            for (const [key, category] of Object.entries(manager.typesMap)) {
                const categoryVal = parseInt(key);
                const slabsIDs = await manager.getAllItemsOfType(0, categoryVal, false);
                if (slabsIDs.length > 0) {
                    ifcCategoryOnExpressIDs[category] = slabsIDs;
                    ifcCategorySubsets[category] = manager.createSubset({
                        modelID: 0,
                        ids: slabsIDs,
                        scene: scene,
                        customID: category
                    });
                }
            }

            setIfcCategorySubsets(ifcCategorySubsets);
        }
        parseIFCCategories();


    }, [ifc, scene]);

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

                {/*<group>
                    {Object.entries(ifcCategorySubsets).map(([key, value], index) =>
                        <primitive key={index} object={value}
                                   onDoubleClick={(e) => {
                                       ifc.ifcManager.getItemProperties(0, value.id).then((value)=> console.log(value))
                                       setHighlightedIDs([value.id]);
                                       console.log(value.id)
                                   }}
                        />
                    )}
                </group>*/}

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
