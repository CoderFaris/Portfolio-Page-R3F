import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
    // we set className so that we can access it in css and do css related things for useGesture, make presentationControls be adjusted on phone
        className="r3f"
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
        } }
    >
        <Experience />
    </Canvas>
)