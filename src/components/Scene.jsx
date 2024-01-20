import * as React from "react";
import {useFrame, useThree} from '@react-three/fiber';
import {useLoader} from "@react-three/fiber";
import {Gltf, Html, Sky} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Suspense, useEffect, useMemo, useRef, useState} from "react";
import {IFCLoader} from "web-ifc-three";
import {MeshLambertMaterial, Vector3} from "three";
import VotingCard from "./VotingCard";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
        // @ts-ignore
        <primitive object={gltf.scene} scale={0.4}/>
    );
};

export default function Scene({handleCameraChange}) {

    const camera = useThree((state) => state.camera);
    const scene = useThree((state) => state.scene);
    const [highlightedIDs, setHighlightedIDs] = useState([]);

    useFrame(() => {
        if (camera) {
            handleCameraChange({
                position: camera.position,
                direction: camera.position.clone().add(camera.getWorldDirection(new Vector3()).multiplyScalar(100))
            });
        }
    });

    const mesh = useRef();
    const [ifcCategorySubsets, setIfcCategorySubsets] = useState({});
    // ToDo Koray: instead of using the ifc file from the public folder, use the ifc file from the database
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
                <group>
                    {Object.entries(ifcCategorySubsets).map(([key, value], index) =>
                        <primitive key={index} object={value}
                                   onDoubleClick={(e) => {
                                       ifc.ifcManager.getItemProperties(0, value.id).then((value) => console.log(value))
                                       setHighlightedIDs([value.id]);
                                       console.log(value.id)
                                   }}
                        />
                    )}
                </group>
                <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>
                <Annotation position={[-4.5, 3.6, -3]}/>
            </Suspense>
        </>
    )
}

function Annotation({position, ...props}) {
    return (
        <Html
            {...props}
            position={position}
            occlude
            castShadow
            receiveShadow
            transform
            scale={0.5}
        >
            <VotingCard/>
        </Html>
    )
}
