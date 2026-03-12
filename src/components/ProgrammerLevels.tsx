export default function ProgrammerLevels(){
  const levels=[
    {name:"Trainee", text:"învață și pune multe întrebări"},
    {name:"Junior", text:"face taskuri simple"},
    {name:"Middle", text:"rezolvă probleme complexe"},
    {name:"Senior", text:"vede arhitectura sistemului"},
    {name:"Team Lead", text:"coordonează oameni și proiecte"}
  ]

  return(
    <div style={{marginTop:80}}>
      <h2>Niveluri programatori</h2>
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
