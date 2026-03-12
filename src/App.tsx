import { useState, useEffect, useMemo } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, Line } from "@react-three/drei"
import { motion } from "framer-motion"

export default function App() {

  return (
    <div style={{background:"#000",color:"white",minHeight:"100vh",padding:40}}>

      <MatrixBackground/>

      <h1 style={{fontSize:60,fontWeight:300,textAlign:"center", color: "white"}}>
        IT = Modern Magic
      </h1>

      <InternetGlobe/>

      <DataGrowth/>

      <DataExplosion/>

      <SuperheroStory/>

      <Creativity/>

      <ITEverywhere/>

      <DataTimeline/>

      <ProgrammerLevels/>

      <SalaryCalculator/>

      <WhatToLearn/>

      <LinkedinTips/>

      <AIGenerator/>

      <CareerSimulator/>

      <HackerConsole/>

    </div>
  )
}

function InternetGlobe(){

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

function DataGrowth(){

  const stats=[
    {label:"Emails/sec",value:"2.5M"},
    {label:"Google searches/sec",value:"70K"},
    {label:"TikTok views/sec",value:"1M"},
    {label:"Instagram posts/sec",value:"50K"}
  ]

  return(

    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(4,1fr)",
      gap:30,
      marginTop:80
    }}>

      {stats.map((s,i)=>(
        <motion.div
          key={i}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{delay:i*0.2}}
          style={{textAlign:"center"}}
        >

          <motion.div
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration:0.8}}
            style={{fontSize:40,color:"#00ffff"}}
          >
            {s.value}
          </motion.div>

          <div style={{color:"#aaa"}}>
            {s.label}
          </div>

        </motion.div>
      ))}

    </div>
  )
}

function AIGenerator(){

  const [prompt,setPrompt]=useState("")
  const [result,setResult]=useState("")

  const generate=()=>{
    setResult("// example generated code\nfunction hello(){\n console.log('Hello world')\n}")
  }

  return(

    <div style={{marginTop:80}}>

      <h2>AI Code Generator</h2>

      <input
        value={prompt}
        onChange={e=>setPrompt(e.target.value)}
        placeholder="create login form"
        style={{width:"100%",padding:10,marginTop:10,background:"#111",color:"white"}}
      />

      <button
        onClick={generate}
        style={{marginTop:10,padding:"10px 20px",background:"cyan"}}
      >
        Generate
      </button>

      <pre style={{
        background:"#111",
        padding:20,
        marginTop:20,
        color:"#00ff90"
      }}>
        {result}
      </pre>

    </div>
  )
}

function CareerSimulator(){

  const levels=["Trainee","Junior","Middle","Senior","Team Lead"]
  const [lvl,setLvl]=useState(0)

  return(

    <div style={{marginTop:80}}>

      <h2>IT Career Simulator</h2>

      <div style={{display:"flex",gap:10,marginTop:10}}>

        {levels.map((l,i)=>(
          <button
            key={i}
            onClick={()=>setLvl(i)}
            style={{
              padding:10,
              background:i===lvl?"cyan":"#222",
              color:i===lvl?"black":"white"
            }}
          >
            {l}
          </button>
        ))}

      </div>

      <div style={{
        background:"#111",
        padding:20,
        marginTop:20
      }}>

        {lvl===0 && "Learning programming basics"}
        {lvl===1 && "Building small features"}
        {lvl===2 && "Designing systems"}
        {lvl===3 && "Leading architecture"}
        {lvl===4 && "Managing teams"}

      </div>

    </div>
  )
}

function HackerConsole(){

  const [input,setInput]=useState("")
  const [logs,setLogs]=useState(["system ready"])

  const commands:any={
    help:"commands: help connect deploy",
    connect:"connecting to network...",
    deploy:"deploying startup..."
  }

  const run=()=>{

    const response=commands[input] || "unknown command"

    setLogs([...logs,"> "+input,response])

    setInput("")
  }

  return(

    <div style={{marginTop:80,fontFamily:"monospace"}}>

      <h2>Hacker Console</h2>

      <div style={{
        background:"#000",
        padding:20,
        height:200,
        overflow:"auto",
        color:"#00ff90"
      }}>

        {logs.map((l,i)=>(
          <div key={i}>{l}</div>
        ))}

      </div>

      <input
        value={input}
        onChange={e=>setInput(e.target.value)}
        onKeyDown={e=>e.key==="Enter" && run()}
        style={{width:"100%",padding:10,background:"#111",color:"#00ff90"}}
      />

    </div>
  )
}

function MatrixBackground(){

  return(

    <div style={{
      position:"fixed",
      top:0,
      left:0,
      width:"100%",
      height:"100%",
      background:
      "linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.9)), repeating-linear-gradient(0deg, rgba(0,255,70,.05) 0px, rgba(0,255,70,.05) 2px, transparent 2px, transparent 4px)",
      zIndex:-1
    }}/>

  )
}

function SuperheroStory(){

  return(
  
  <div style={{marginTop:80,maxWidth:900}}>
  
  <h2 style={{fontSize:36}}>🦸 IT – Supereroul din umbră</h2>
  
  <p>
  Fiecare aplicație, fiecare site, fiecare joc – este construit de oameni ca voi.
  </p>
  
  <ul>
  
  <li>Scrii câteva linii de cod → pornești o mașină de la distanță 🚗</li>
  
  <li>Scrii câteva linii de cod → diagnostichezi un pacient online 🏥</li>
  
  <li>Scrii câteva linii de cod → oprești o fraudă bancară 🏦</li>
  
  </ul>
  
  <p style={{marginTop:20,fontWeight:"bold"}}>
  IT-iștii sunt supereroii nevăzuți ai secolului XXI.
  </p>
  
  </div>
  
  )
  }

  function Creativity(){

    return(
    
    <div style={{marginTop:80,maxWidth:900}}>
    
    <h2>💡 IT = Spațiu infinit de creativitate</h2>
    
    <p>În alte domenii ai nevoie de:</p>
    
    <ul>
    <li>Fabrici</li>
    <li>Materii prime</li>
    <li>Spații fizice</li>
    </ul>
    
    <p>În IT ai nevoie doar de:</p>
    
    <ul>
    
    <li>💻 Laptop</li>
    <li>💡 Idee</li>
    <li>🔍 Curiozitate</li>
    <li>🦁 Curaj</li>
    
    </ul>
    
    <p>
    Poți crea orice: aplicații, jocuri, sisteme medicale sau tehnologii pentru spațiu.
    </p>
    
    </div>
    
    )
    }

    function ITEverywhere(){

      const [count,setCount]=useState(0)
      
      return(
      
      <div style={{marginTop:80}}>
      
      <h2>📱 IT este peste tot</h2>
      
      <p>Apasă pe lucrurile pe care le-ai folosit azi:</p>
      
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
      
      <button onClick={()=>setCount(count+1)}>Telefon</button>
      
      <button onClick={()=>setCount(count+1)}>Instagram</button>
      
      <button onClick={()=>setCount(count+1)}>GPS</button>
      
      <button onClick={()=>setCount(count+1)}>Card bancar</button>
      
      </div>
      
      <p style={{marginTop:20}}>
      Ai folosit {count} tehnologii IT azi.
      </p>
      
      </div>
      
      )
      }

      function DataTimeline(){

        const events=[
        "10.000 ani: desene pe pereții peșterilor",
        "500 ani: câteva sute de cărți",
        "100 ani: biblioteci cu milioane de volume",
        "50 ani: primul hard disk – 5MB",
        "Azi: miliarde de date pe secundă"
        ]
        
        return(
        
        <div style={{marginTop:80}}>
        
        <h2>📊 Povestea datelor</h2>
        
        {events.map((e,i)=>(
        
        <motion.div
        key={i}
        initial={{opacity:0,x:-40}}
        whileInView={{opacity:1,x:0}}
        transition={{delay:i*0.2}}
        style={{
        background:"#111",
        padding:20,
        marginTop:10
        }}
        >
        
        {e}
        
        </motion.div>
        
        ))}
        
        </div>
        
        )
        }

        function ProgrammerLevels(){

          const levels=[
          {
          name:"Trainee",
          text:"învață și pune multe întrebări"
          },
          {
          name:"Junior",
          text:"face taskuri simple"
          },
          {
          name:"Middle",
          text:"rezolvă probleme complexe"
          },
          {
          name:"Senior",
          text:"vede arhitectura sistemului"
          },
          {
          name:"Team Lead",
          text:"coordonează oameni și proiecte"
          }
          ]
          
          return(
          
          <div style={{marginTop:80}}>
          
          <h2>🪜 Niveluri programatori</h2>
          
          {levels.map((l,i)=>(
          
          <div
          key={i}
          style={{
          background:"#111",
          padding:20,
          marginTop:10
          }}
          >
          
          <b>{l.name}</b> – {l.text}
          
          </div>
          
          ))}
          
          </div>
          
          )
          }

          function SalaryCalculator(){

            const [level,setLevel]=useState<"Junior" | "Middle" | "Senior">("Junior")

            const salaries:{[key in "Junior" | "Middle" | "Senior"]: string}={
            Junior:"30k–55k MDL",
            Middle:"45k–70k MDL",
            Senior:"70k+ MDL"
            }

            return(

            <div style={{marginTop:80}}>

            <h2>💰 Salarii IT Moldova</h2>

            <select
            value={level}
            onChange={(e)=>setLevel(e.target.value as "Junior" | "Middle" | "Senior")}
            >

            <option>Junior</option>
            <option>Middle</option>
            <option>Senior</option>

            </select>

            <p style={{marginTop:20,fontSize:24,color:"cyan"}}>
            { salaries[level] }
            </p>
            
            </div>
            
            )
            }

            function WhatToLearn(){

              return(
              
              <div style={{marginTop:80,maxWidth:900}}>
              
              <h2>🎯 Ce trebuie să faceți acum</h2>
              
              <ul>
              
              <li>📚 Matematică – baza logicii</li>
              
              <li>🇬🇧 Engleză – nivel B2/C1</li>
              
              <li>🌍 Cultură generală</li>
              
              <li>🧠 Comunicare între business și IT</li>
              
              </ul>
              
              </div>
              
              )
              }

              function LinkedinTips(){

                return(
                
                <div style={{marginTop:80,maxWidth:900, color: "white"}}>
                
                <h2>💼 LinkedIn – cartea de vizită digitală</h2>
                
                <ul>
                
                <li>Poză profesională</li>
                
                <li>Proiecte reale</li>
                
                <li>Certificate</li>
                
                <li>Recomandări</li>
                
                <li>Postări și activitate</li>
                
                </ul>
                
                </div>
                
                )
                }

                function DataExplosion(){

                  const timeline=[
                  {
                  year:"10 000 ani în urmă",
                  text:"Desene pe pereții peșterilor",
                  data:1
                  },
                  {
                  year:"500 ani în urmă",
                  text:"Primele biblioteci cu sute de cărți",
                  data:100
                  },
                  {
                  year:"100 ani în urmă",
                  text:"Biblioteci naționale cu milioane de volume",
                  data:1000000
                  },
                  {
                  year:"1970",
                  text:"Primul hard disk – 5MB",
                  data:5000000
                  },
                  {
                  year:"2000",
                  text:"Internetul devine global",
                  data:1000000000
                  },
                  {
                  year:"2026",
                  text:"Explozie de date pe internet",
                  data:1000000000000
                  }
                  ]
                  
                  const [step,setStep]=useState(0)
                  const [display,setDisplay]=useState(0)
                  
                  useEffect(()=>{
                  
                  let start=0
                  const target=timeline[step].data
                  
                  const interval=setInterval(()=>{
                  
                  start += target/40
                  
                  if(start>=target){
                  
                  start=target
                  clearInterval(interval)
                  
                  }
                  
                  setDisplay(Math.floor(start))
                  
                  },40)
                  
                  return ()=>clearInterval(interval)
                  
                  },[step])
                  
                  return(
                  
                  <div style={{marginTop:80}}>
                  
                  <h2 style={{fontSize:36}}>
                  📊 Cum a crescut informația în lume
                  </h2>
                  
                  <div style={{
                  background:"#111",
                  padding:30,
                  marginTop:20
                  }}>
                  
                  <h3>{timeline[step].year}</h3>
                  
                  <p>{timeline[step].text}</p>
                  
                  <div style={{
                  fontSize:40,
                  color:"cyan",
                  marginTop:10
                  }}>
                  
                  {display.toLocaleString()} unități de informație
                  
                  </div>
                  
                  </div>
                  
                  <div style={{
                  display:"flex",
                  gap:10,
                  marginTop:20,
                  flexWrap:"wrap"
                  }}>
                  
                  {timeline.map((t,i)=>(
                  
                  <button
                  key={i}
                  onClick={()=>setStep(i)}
                  style={{
                  padding:10,
                  background:i===step?"cyan":"#222",
                  color:i===step?"black":"white"
                  }}
                  >
                  
                  {t.year}
                  
                  </button>
                  
                  ))}
                  
                  </div>
                  
                  </div>
                  
                  )
                  }

