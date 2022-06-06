import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Zacata.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.model.geometry}
        material={materials['Silver Glossy']}
        rotation={[0, 0, 0]}
        scale={[1, 1, 0.2]}
        position={[0, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/Zacata.gltf')
