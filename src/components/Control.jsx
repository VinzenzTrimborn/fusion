import {useFrame, useThree} from "@react-three/fiber";
import React, {useEffect, useState} from "react";
import BimmyControls from "../controls/BimmyControls";

export default function Control() {
    const camera = useThree((state) => state.camera);
    const gl = useThree((state) => state.gl);
    const invalidate = useThree((state) => state.invalidate);
    const [controls] = useState(() => new BimmyControls(camera, gl.domElement));

    useEffect(() => {
        controls.addCallback(invalidate);
        return () => controls.removeCallback(invalidate)
    }, [controls, invalidate])

    useFrame((_, delta) => {
        controls.update()
    });
    return controls ? <primitive object={controls}/> : null
}
