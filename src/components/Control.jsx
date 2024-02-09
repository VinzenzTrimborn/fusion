import {useFrame, useThree} from "@react-three/fiber";
import React, {useEffect, useState} from "react";
import BimControls from "../controls/BimControls";

export default function Control({lookAt, position}) {
    const camera = useThree((state) => state.camera);
    const gl = useThree((state) => state.gl);
    const invalidate = useThree((state) => state.invalidate);
    const [controls] = useState(() => new BimControls(camera, gl.domElement));


    useEffect(() => {
        controls.addCallback(invalidate);
        return () => controls.removeCallback(invalidate)
    }, [controls, invalidate])

    useEffect(() => {
        if(!lookAt || !position) return
        controls.setPosition(position.x, position.y, position.z);
        controls.lookAt(lookAt.x, lookAt.y, lookAt.z);
        invalidate();
    }, [controls, lookAt, position, invalidate])

    useFrame((_, delta) => {
        controls.update()
    });
    return controls ? <primitive object={controls}/> : null
}
