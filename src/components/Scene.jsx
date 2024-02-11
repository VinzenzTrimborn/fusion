import * as React from "react";
import {useFrame, useThree} from '@react-three/fiber';
import {useLoader} from "@react-three/fiber";
import {Html, Sky} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {useEffect, useMemo, useState} from "react";
import {IFCLoader} from "web-ifc-three";
import {MeshLambertMaterial, Vector3} from "three";
import ViewerAnnotation from "./ViewerAnnotation";

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

    const [ifcCategorySubsets, setIfcCategorySubsets] = useState({});


    const ifc =
        useLoader(IFCLoader, "/main.ifc", (ifcLoader) => {
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
            <group>
                {Object.entries(ifcCategorySubsets).map(([key, value], index) =>
                    <primitive key={index} object={value}
                               onDoubleClick={(e) => {
                                   ifc.ifcManager.getItemProperties(0, value.id).then((value) => console.log(value))
                                   setHighlightedIDs([value.id]);
                                   console.log(value.id)
                                   console.log({
                                       position: camera.position,
                                       direction: camera.position.clone().add(camera.getWorldDirection(new Vector3()).multiplyScalar(100))
                                   })
                               }}
                    />
                )}
            </group>
            <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>
            <Annotation activity={'platform'} position={[411.6319091532528, 38.90000000000015, -539.2609510078722]}/>
            <Annotation activity={'skate'} position={[421.21850526825716, 2.6000000000000245, -733.6117650596663]}/>
            <Annotation activity={'climbing'} position={[440.44495690238534, 2.600000000000029, -824.0734942079337]}/>
            <Annotation activity={'open'} position={[464.5228597414705, 2.600000000000029, -883.2301522631742]}/>
            <Annotation activity={'market'} position={[419.2881558593361, 2.6000000000001116, -342.1737582146491]}/>

        </>
    );
}

function Annotation({position, activity, ...props}) {
    return (
        <Html
            {...props}
            position={position}
            transform
            scale={0.2}
        >
            <ViewerAnnotation activities={activity}/>
        </Html>
    )
}
