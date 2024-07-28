import React from "react"

const NotSupported:React.FC = () => {
    return <div>
        <p>Unfortunately your device does not support Web XR.</p>
        <p>Please check <a href="https://developers.google.com/ar/devices">this page</a> for more information.</p>
    </div>
}

export default NotSupported