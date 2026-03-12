import { useState } from "react"

export default function AIGenerator(){
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
        style={{width:"100%",padding:10,marginTop:10,background:"#111",color:"white", border:"1px solid cyan", boxSizing:"border-box"}}
      />
      <button
        onClick={generate}
        style={{marginTop:10,padding:"10px 20px",background:"cyan", color:"black", border:"none", cursor:"pointer", fontWeight:"bold"}}
      >
        Generate
      </button>
      <pre style={{
        background:"#111",
        padding:20,
        marginTop:20,
        color:"#00ff90",
        border:"1px solid #00ff90",
        overflow:"auto"
      }}>
        {result}
      </pre>
    </div>
  )
}
