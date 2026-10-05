import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import ServiceBlock from "./components/ServiceBlock"

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Intro />
      <ServiceBlock />
    </div>
  )
}

export default App;