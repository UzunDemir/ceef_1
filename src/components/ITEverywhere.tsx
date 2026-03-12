import { useState } from "react"

export default function ITEverywhere(){
  const [count,setCount]=useState(0)

  return(
    <div style={{marginTop:80}}>
      <h2>IT este peste tot</h2>
      <p>Apasă pe lucrurile pe care le-ai folosit azi:</p>
      <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
        <button onClick={()=>setCount(count+1)} style={{padding:"10px 20px", background:"#111", border:"1px solid cyan", color:"cyan", cursor:"pointer"}}>Telefon</button>
        <button onClick={()=>setCount(count+1)} style={{padding:"10px 20px", background:"#111", border:"1px solid cyan", color:"cyan", cursor:"pointer"}}>Instagram</button>
        <button onClick={()=>setCount(count+1)} style={{padding:"10px 20px", background:"#111", border:"1px solid cyan", color:"cyan", cursor:"pointer"}}>GPS</button>
        <button onClick={()=>setCount(count+1)} style={{padding:"10px 20px", background:"#111", border:"1px solid cyan", color:"cyan", cursor:"pointer"}}>Card bancar</button>
      </div>
      <p style={{marginTop:20}}>
        Ai folosit {count} tehnologii IT azi.
      </p>
    </div>
  )
}
