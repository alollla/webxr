import React, { useEffect } from "react"
import { XR, createXRStore } from '@react-three/xr'
import { useTexture } from "@react-three/drei"

const store = createXRStore()

const Scene: React.FC = () => {

    const [colorMap] = useTexture([
        '/characters/naruto.png',
    ])


    useEffect(() => {
        store.enterAR()
    }, [])

    return (
        <XR store={store}>
            <mesh position={[0, 0, -4]}>
                <planeGeometry args={[2, 5]} />
                <meshBasicMaterial map={colorMap} transparent opacity={1} />
            </mesh>
        </XR>
    )
}

export default Scene
