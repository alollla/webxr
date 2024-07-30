import { Canvas } from '@react-three/fiber'

import './App.css'

import Scene from './components/Scene'
import NotSupported from './components/NotSupported'
import { checkSupport } from './utils'

function App() {
    return (checkSupport()
        ? <Canvas>
            <Scene />
        </Canvas>
        : <NotSupported />
    )
}

export default App
