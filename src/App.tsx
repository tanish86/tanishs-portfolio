import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import Scene from './components/Scene'
import HTMLContent from './components/HTMLContent'
import './index.css'

function App() {
  return (
    <div className="w-full h-screen bg-primary">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        {/* Lights for the 3D Scene */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <spotLight position={[-10, -10, -5]} intensity={1} color="#14b8a6" />

        {/* ScrollControls gives us a scrollable container */}
        <ScrollControls pages={5} damping={0.2}>
          
          {/* The 3D Scene that reacts to scroll */}
          <Scene />

          {/* HTML Overlay that scrolls natively */}
          <Scroll html style={{ width: '100%', height: '100%' }}>
            <HTMLContent />
          </Scroll>

        </ScrollControls>
      </Canvas>
    </div>
  )
}

export default App
