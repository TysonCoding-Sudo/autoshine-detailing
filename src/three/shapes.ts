import * as THREE from 'three'

const DETAIL = 4

function buildUnitGrid(): Float32Array {
  const geo = new THREE.IcosahedronGeometry(1, DETAIL)
  const pos = geo.attributes.position.array as Float32Array
  geo.dispose()
  return pos
}

function dir(d: Float32Array, i: number, out: { x: number; y: number; z: number }) {
  out.x = d[i]
  out.y = d[i + 1]
  out.z = d[i + 2]
  const len = Math.hypot(out.x, out.y, out.z) || 1
  out.x /= len
  out.y /= len
  out.z /= len
}

export type ShapeTarget = { name: string; positions: Float32Array }

export function buildShapeTargets(): ShapeTarget[] {
  const grid = buildUnitGrid()
  const n = grid.length
  const v = { x: 0, y: 0, z: 0 }

  const make = (radiusFn: (x: number, y: number, z: number) => number): Float32Array => {
    const arr = new Float32Array(n)
    for (let i = 0; i < n; i += 3) {
      dir(grid, i, v)
      const r = radiusFn(v.x, v.y, v.z)
      arr[i] = v.x * r
      arr[i + 1] = v.y * r
      arr[i + 2] = v.z * r
    }
    return arr
  }

  const sphere = make(() => 1.25)

  const cube = make((x, y, z) => {
    const m = Math.max(Math.abs(x), Math.abs(y), Math.abs(z))
    return m > 0 ? 1.25 / Math.pow(m, 0.85) : 1.25
  })

  const octahedron = make((x, y, z) => {
    const s = Math.abs(x) + Math.abs(y) + Math.abs(z)
    return s > 0 ? 1.25 / Math.pow(s, 0.9) : 1.25
  })

  const star = make((x, y, z) => {
    const az = Math.atan2(y, x)
    const pol = Math.acos(THREE.MathUtils.clamp(z, -1, 1))
    const bump =
      0.16 * Math.pow(Math.abs(Math.cos(3 * az)), 6) +
      0.16 * Math.pow(Math.abs(Math.cos(3 * pol)), 6) +
      0.08 * Math.pow(Math.abs(Math.sin(5 * (az + pol))), 8)
    return 1.05 + bump * 1.9
  })

  const gear = make((x, y, z) => {
    const az = Math.atan2(y, x)
    const pol = Math.acos(THREE.MathUtils.clamp(z, -1, 1))
    const ripple = 0.11 * Math.sin(7 * az + Math.sin(pol * 3) * 1.2)
    const ring = 0.09 * Math.sin(5 * pol)
    return 1.2 + ripple + ring
  })

  return [
    { name: 'Globe', positions: sphere },
    { name: 'Prism', positions: cube },
    { name: 'Octa', positions: octahedron },
    { name: 'Nova', positions: star },
    { name: 'Gear', positions: gear },
  ]
}

export const SHAPE_COLORS: string[] = [
  '#9bd8ff',
  '#22d3ee',
  '#a78bfa',
  '#f472b6',
  '#fbbf24',
]
