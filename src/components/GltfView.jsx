import * as React from "react";
import {PlasmicGltfView} from "./plasmic/fusion_lab/PlasmicGltfView";
import {Canvas, useThree} from '@react-three/fiber';
import {useLoader} from "@react-three/fiber";
import {CameraControls, Environment, Gltf, Sky, Stars, useBVH} from "@react-three/drei";
// @ts-ignore
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Suspense, useRef, useState} from "react";
import {VRButton, ARButton, XR, Controllers, Hands} from '@react-three/xr'
import {TeleportationPlane} from '@react-three/xr'
import {IFCLoader} from "web-ifc-three";
import Control from "./Control";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "./Poimandres.gltf");
    return (
        // @ts-ignore
        <primitive object={gltf.scene} scale={0.4}/>
    );
};

function GltfView_(props, ref) {
    const mesh = useRef();
    const [ifcCategorySubsets, setIfcCategorySubsets] = useState({});
    const ifc = useLoader(IFCLoader, "/FusionLab_TeamC_01.ifc", (ifcLoader) => {
        ifcLoader.ifcManager.setWasmPath("../../wasm/");
    });

    return (
        <PlasmicGltfView
            root={{ref}}
            viewer={{
                render: () => (
                    <>
                        <VRButton/>
                        <Canvas>
                            <XR>
                                <Controllers/>
                                <Hands/>
                                <pointLight position={[400, 400, 0]} intensity={0.5} color="white"/>
                                <pointLight position={[-400, 400, 0]} intensity={0.3} color="white"/>
                                <pointLight position={[0, 400, -400]} intensity={0.4} color="white"/>
                                <pointLight position={[0, 400, 400]} intensity={0.2} color="white"/>
                                <Suspense fallback={null}>
                                    <primitive object={ifc} />
                                    <Control lookAt={undefined} position={undefined}/>
                                    <TeleportationPlane
                                        leftHand={true}
                                        rightHand={false}
                                        maxDistance={10}
                                        size={0.25}
                                    />
                                    <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}/>
                                </Suspense>
                            </XR>
                        </Canvas>
                    </>
                )
            }}
            {...props}
        />);
}

const GltfView = React.forwardRef(GltfView_);

export default GltfView;
