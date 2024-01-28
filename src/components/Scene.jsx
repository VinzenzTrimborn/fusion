import * as React from "react";
import {useFrame, useThree} from '@react-three/fiber';
import {useLoader} from "@react-three/fiber";
import {Html, Loader, Sky} from "@react-three/drei";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Suspense, useEffect, useMemo, useState} from "react";
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

    //ToDo Mohammad: Choose nice lights. Maybe add a sun. Maybe add a skybox.
    // Maybe add a ground. Maybe add a background. Maybe add a fog.
    // For the different IFC Categories you can use different materials.
    // Choose nice positions for Tinas Annotations
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
                                       console.log({
                                           position: camera.position,
                                           direction: camera.position.clone().add(camera.getWorldDirection(new Vector3()).multiplyScalar(100))
                                       })
                                   }}
                        />
                    )}
                </group>
                <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>
                <Annotation position={[440.244272848507, 3.800000000000114, -854.2200189272153]}/>
            </Suspense>
            <Loader/>
        </>
    );
}

function Annotation({position, ...props}) {
    return (
        // ToDo Mohammad: You can play aroud  with the annotations here. Let them throw a shadow or transform.
        <Html
            {...props}
            position={position}
            occlude
            castShadow
            receiveShadow
            transform
            scale={0.5}
        >
            <ViewerAnnotation climbingWall={'Picture1'}/>
        </Html>
    )
}
