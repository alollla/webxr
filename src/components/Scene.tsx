import React, { useEffect, useRef } from "react"

const Scene: React.FC<{ stream: MediaStream }> = ({ stream }) => {
    const videoRef = useRef<HTMLVideoElement|null>(null)

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.srcObject = stream
        }
    }, [])

    return <div>
        <video ref={videoRef} autoPlay muted />
    </div>
}

export default Scene