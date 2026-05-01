import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function Scene() {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScroll()

  useFrame((_state, delta) => {
    if (!groupRef.current) return

    // Scroll offset is between 0 and 1
    const offset = scroll.offset

    // We can animate the character's rotation and position based on scroll progress
    // Hero section (offset ~0): looking straight
    // Skills (offset ~0.25): rotate right
    // Experience (offset ~0.5): rotate left, move up
    // Projects (offset ~0.75): looking down slightly
    
    // Smoothly interpolate rotation
    const targetRotationY = offset * Math.PI * 2 // full spin over the page
    const targetRotationX = Math.sin(offset * Math.PI * 4) * 0.2
    
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotationY, 4, delta)
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotationX, 4, delta)

    // Move character slightly to the right to make room for text on the left as we scroll
    const targetPositionX = offset > 0.1 ? 2 : 0
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetPositionX, 3, delta)
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Placeholder Character: A stylized abstract construct */}
        {/* Head */}
        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#1f2937" roughness={0.3} metalness={0.8} />
        </mesh>

        {/* Eye/Visor (Glowing Accent) */}
        <mesh position={[0, 1.2, 0.76]}>
          <boxGeometry args={[1, 0.3, 0.1]} />
          <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={2} toneMapped={false} />
        </mesh>

        {/* Neck */}
        <mesh position={[0, 0.1, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 0.8, 16]} />
          <meshStandardMaterial color="#374151" roughness={0.6} metalness={0.4} />
        </mesh>

        {/* Torso */}
        <mesh position={[0, -1.2, 0]}>
          <sphereGeometry args={[1.4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#111827" roughness={0.7} />
        </mesh>
      </Float>
    </group>
  )
}
