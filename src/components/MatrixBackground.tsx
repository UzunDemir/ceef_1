export default function MatrixBackground(){
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
