
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Projects from './Components/Projects.jsx'
import Experience from './Components/Experience.jsx'
import About from './Components/About.jsx'

function App() {


  return (
      <div className = "bg-slate-600">

       <Navbar/>
       <Hero/>
       <About/>
       <Experience/>

       <Projects/>
       


    </div>
  );
}

export default App
