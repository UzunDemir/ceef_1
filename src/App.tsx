import MatrixBackground from "./components/MatrixBackground"
import InternetGlobe from "./components/InternetGlobe"
import DataGrowth from "./components/DataGrowth"
import SuperheroStory from "./components/SuperheroStory"
import Creativity from "./components/Creativity"
import ITEverywhere from "./components/ITEverywhere"
import DataTimeline from "./components/DataTimeline"
import DataExplosion from "./components/DataExplosion"
import ProgrammerLevels from "./components/ProgrammerLevels"
import SalaryCalculator from "./components/SalaryCalculator"
import WhatToLearn from "./components/WhatToLearn"
import LinkedinTips from "./components/LinkedinTips"
import AIGenerator from "./components/AIGenerator"
import CareerSimulator from "./components/CareerSimulator"
import HackerConsole from "./components/HackerConsole"

export default function App() {
  return (
    <div style={{background:"#000",color:"white",minHeight:"100vh",padding:"40px 20px"}}>
      <MatrixBackground/>

      <div style={{maxWidth:"1200px", margin:"0 auto"}}>
        <h1 style={{fontSize:"clamp(36px, 8vw, 60px)", fontWeight:300, textAlign:"center", color: "white", marginBottom:60}}>
          IT = Modern Magic
        </h1>

        <InternetGlobe/>
        <DataGrowth/>
        <DataExplosion/>
        <SuperheroStory/>
        <Creativity/>
        <ITEverywhere/>
        <DataTimeline/>
        <ProgrammerLevels/>
        <SalaryCalculator/>
        <WhatToLearn/>
        <LinkedinTips/>
        <AIGenerator/>
        <CareerSimulator/>
        <HackerConsole/>
      </div>
    </div>
  )
}
