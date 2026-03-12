import { useState, useEffect } from "react"

export default function DataExplosion(){
  const timeline=[
    {year:"10 000 ani în urmă", text:"Desene pe pereții peșterilor", data:1},
    {year:"500 ani în urmă", text:"Primele biblioteci cu sute de cărți", data:100},
    {year:"100 ani în urmă", text:"Biblioteci naționale cu milioane de volume", data:1000000},
    {year:"1970", text:"Primul hard disk – 5MB", data:5000000},
    {year:"2000", text:"Internetul devine global", data:1000000000},
    {year:"2026", text:"Explozie de date pe internet", data:1000000000000}
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
        Cum a crescut informația în lume
      </h2>
      <div style={{background:"#111", padding:30, marginTop:20}}>
        <h3>{timeline[step].year}</h3>
        <p>{timeline[step].text}</p>
        <div style={{fontSize:40, color:"cyan", marginTop:10}}>
          {display.toLocaleString()} unități de informație
        </div>
      </div>
      <div style={{display:"flex", gap:10, marginTop:20, flexWrap:"wrap"}}>
        {timeline.map((t,i)=>(
          <button
            key={i}
            onClick={()=>setStep(i)}
            style={{
              padding:10,
              background:i===step?"cyan":"#222",
              color:i===step?"black":"white",
              border:"none",
              cursor:"pointer"
            }}
          >
            {t.year}
          </button>
        ))}
      </div>
    </div>
  )
}
