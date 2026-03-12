import { motion } from "framer-motion"

export default function DataTimeline(){
  const events=[
    "10.000 ani: desene pe pereții peșterilor",
    "500 ani: câteva sute de cărți",
    "100 ani: biblioteci cu milioane de volume",
    "50 ani: primul hard disk – 5MB",
    "Azi: miliarde de date pe secundă"
  ]

  return(
    <div style={{marginTop:80}}>
      <h2>Povestea datelor</h2>
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
