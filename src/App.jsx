import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Intro />
    </div>
  )
}

export default App;