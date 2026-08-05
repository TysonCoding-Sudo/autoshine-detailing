import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { buildShapeTargets, SHAPE_COLORS } from '../../three/shapes'
import { scrollMotion } from '../../lib/motion'

const AUTO_SPEED = 0.12

export function MorphingShape() {
  const mesh = useRef<THREE.Mesh>(null!)
  const material = useRef<any>(null!)

  const { geometry, targets, baseCount } = useMemo(() => {
    const targets = buildShapeTargets()
    const base = targets[0].positions.length
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(base), 3))
    geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(base), 3))
    return { geometry, targets, baseCount: base }
  }, [])

  const state = useRef({ total: 0 })
  const tmpColor = useMemo(() => new THREE.Color(), [])

  useFrame((clockState, delta) => {
    const s = state.current
    const elapsed = clockState.clock.elapsedTime

    const desired = (elapsed * AUTO_SPEED + scrollMotion.value * 9) % targets.length
    s.total = THREE.MathUtils.damp(s.total, desired, 2.4, delta)

    const length = targets.length
    const idx = Math.floor(s.total)
    const frac = THREE.MathUtils.smoothstep(s.total - idx, 0, 1)
    const current = targets[idx % length]
    const next = targets[(idx + 1) % length]

    const attr = geometry.attributes.position as THREE.BufferAttribute
    const arr = attr.array as Float32Array
    for (let i = 0; i < baseCount; i += 3) {
      arr[i] = current.positions[i] + (next.positions[i] - current.positions[i]) * frac
      arr[i + 1] = current.positions[i + 1] + (next.positions[i + 1] - current.positions[i + 1]) * frac
      arr[i + 2] = current.positions[i + 2] + (next.positions[i + 2] - current.positions[i + 2]) * frac
    }
    attr.needsUpdate = true
    geometry.computeVertexNormals()

    const c0 = new THREE.Color(SHAPE_COLORS[idx % length])
    const c1 = new THREE.Color(SHAPE_COLORS[(idx + 1) % length])
    tmpColor.copy(c0).lerp(c1, frac)

    material.current.color.lerp(tmpColor, 0.06)
    material.current.attenuationColor.lerp(tmpColor, 0.06)

    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.16
      mesh.current.rotation.x += delta * 0.045
    }
  })

  return (
    <mesh ref={mesh} geometry={geometry} castShadow>
      <MeshTransmissionMaterial
        ref={material}
        transmission={1}
        thickness={1.4}
        roughness={0.08}
        ior={1.5}
        chromaticAberration={0.32}
        anisotropicBlur={0.25}
        distortion={0.18}
        temporalDistortion={0.08}
        samples={8}
        resolution={256}
        backside
        clearcoat={1}
        clearcoatRoughness={0.1}
        color="#9bd8ff"
        attenuationColor="#9bd8ff"
        attenuationDistance={2.2}
      />
    </mesh>
  )
}