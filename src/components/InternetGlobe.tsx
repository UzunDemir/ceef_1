import { useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Line } from "@react-three/drei"

export default function InternetGlobe(){
  const connections: Array<[[number, number, number], [number, number, number]]>=[
    [[0,0,2],[1,1,1]],
    [[0,0,2],[-1,1,-1]],
    [[0,0,2],[2,-1,0]]
  ]

  const lines=useMemo(()=>connections.map((c,i)=>
    <Line key={i} points={c as any} color="cyan" lineWidth={1}/>
  ),[])

  return(
    <div style={{height:500}}>
      <Canvas>
        <ambientLight intensity={0.6}/>
        <directionalLight position={[3,3,3]}/>

        <Sphere args={[2,64,64]}>
          <meshStandardMaterial wireframe color="cyan"/>
        </Sphere>

        {lines}

        <OrbitControls autoRotate autoRotateSpeed={0.5}/>
      </Canvas>
    </div>
  )
}
