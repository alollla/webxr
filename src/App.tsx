import { useEffect, useState } from 'react'

import './App.css'

import Scene from './components/Scene'
import NotAllowed from './components/NotAllowed'
import NotSupported from './components/NotSupported'
import Loader from './components/Loader'
import { checkSupport, getCameraStream } from './utils'

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isPermissionGranted, setIsPermissonGranted] = useState<boolean>(false);
    const [stream, setStream] = useState<any>(null);

    useEffect(() => {
        getCameraStream()
            .then(stream => {
                setStream(stream)
                setIsPermissonGranted(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            {checkSupport()
                ? (isLoading
                    ? <Loader />
                    : (isPermissionGranted
                        ? <Scene stream={stream} />
                        : <NotAllowed />))
                : <NotSupported />
            }
        </>
    )
}

export default App
