import { useState } from "react"

export default function HackerConsole(){
  const [input,setInput]=useState("")
  const [logs,setLogs]=useState(["system ready"])

  const commands:{[key: string]: string}={
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
        color:"#00ff90",
        border:"1px solid #00ff90"
      }}>
        {logs.map((l,i)=>(
          <div key={i}>{l}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={e=>setInput(e.target.value)}
        onKeyDown={e=>e.key==="Enter" && run()}
        style={{width:"100%",padding:10,background:"#111",color:"#00ff90", border:"1px solid #00ff90", boxSizing:"border-box", fontFamily:"monospace"}}
      />
    </div>
  )
}
