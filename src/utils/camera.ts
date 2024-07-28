export async function getCameraStream() {
    return navigator.mediaDevices.getUserMedia({
        video: true
    })
}