import { useState } from "react"

export default function SalaryCalculator(){
  const [level,setLevel]=useState<"Junior" | "Middle" | "Senior">("Junior")

  const salaries:{[key in "Junior" | "Middle" | "Senior"]: string}={
    Junior:"30k–55k MDL",
    Middle:"45k–70k MDL",
    Senior:"70k+ MDL"
  }

  return(
    <div style={{marginTop:80}}>
      <h2>Salarii IT Moldova</h2>
      <select
        value={level}
        onChange={(e)=>setLevel(e.target.value as "Junior" | "Middle" | "Senior")}
        style={{padding:10, background:"#111", color:"cyan", border:"1px solid cyan", fontSize:16}}
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
