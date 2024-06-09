import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useGLTF, Gltf } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Sushi } from './Sushi'
import { House } from './House'
function App() {
  const [count, setCount] = useState(0)
  // Load a react fiber gltf model found in the assets folder

  return (
    <div className='App'> 


      
        <Canvas>
          <ambientLight intensity={8} />
          <pointLight intensity={2} position={[-1, 2, -2]} />
          <OrbitControls />
          {/* <Sushi position={[0,-5,0]}/> */}
          <House position={[0,0,0]}/>
        </Canvas>
  </div>
  )
}

export default App
