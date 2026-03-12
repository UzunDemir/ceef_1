import { useState } from "react"

export default function CareerSimulator(){
  const levels=["Trainee","Junior","Middle","Senior","Team Lead"]
  const [lvl,setLvl]=useState(0)

  return(
    <div style={{marginTop:80}}>
      <h2>IT Career Simulator</h2>
      <div style={{display:"flex",gap:10,marginTop:10, flexWrap:"wrap"}}>
        {levels.map((l,i)=>(
          <button
            key={i}
            onClick={()=>setLvl(i)}
            style={{
              padding:10,
              background:i===lvl?"cyan":"#222",
              color:i===lvl?"black":"white",
              border:"none",
              cursor:"pointer"
            }}
          >
            {l}
          </button>
        ))}
      </div>
      <div style={{background:"#111", padding:20, marginTop:20}}>
        {lvl===0 && "Learning programming basics"}
        {lvl===1 && "Building small features"}
        {lvl===2 && "Designing systems"}
        {lvl===3 && "Leading architecture"}
        {lvl===4 && "Managing teams"}
      </div>
    </div>
  )
}
