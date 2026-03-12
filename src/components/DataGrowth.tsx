import { motion } from "framer-motion"

export default function DataGrowth(){
  const stats=[
    {label:"Emails/sec",value:"2.5M"},
    {label:"Google searches/sec",value:"70K"},
    {label:"TikTok views/sec",value:"1M"},
    {label:"Instagram posts/sec",value:"50K"}
  ]

  return(
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",
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
