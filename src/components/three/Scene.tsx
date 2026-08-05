import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment, Lightformer, Float, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { MorphingShape } from './MorphingShape'

export function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.35} />
        <pointLight position={[6, 4, 6]} intensity={40} color="#9bd8ff" />
        <pointLight position={[-6, -3, 2]} intensity={30} color="#22d3ee" />
        <pointLight position={[0, -5, -4]} intensity={18} color="#a78bfa" />

        <Float speed={1.4} rotationIntensity={1.1} floatIntensity={1.6} floatingRange={[-0.2, 0.2]}>
          <MorphingShape />
        </Float>

        <Sparkles count={120} scale={[12, 8, 6]} size={2.2} speed={0.32} opacity={0.6} color="#8fd9ff" />

        <ContactShadows position={[0, -2.4, 0]} opacity={0.55} scale={12} blur={2.6} far={4} color="#000000" />

        <Environment resolution={256}>
          <Lightformer form="rect" intensity={2.2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#ffffff" />
          <Lightformer form="circle" intensity={3} position={[-5, 2, -1]} scale={4} color="#22d3ee" />
          <Lightformer form="ring" intensity={3} position={[6, 3, 2]} scale={4} color="#a78bfa" />
          <Lightformer form="rect" intensity={1.2} position={[0, -5, 10]} scale={[10, 10, 1]} color="#9bd8ff" />
        </Environment>

        <EffectComposer multisampling={0}>
          <Bloom intensity={0.85} luminanceThreshold={0.18} luminanceSmoothing={0.9} mipmapBlur />
          <Vignette eskil={false} offset={0.18} darkness={0.72} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}