import "./Hero.css";
import ProjectCard from "./ProjectCard";

function Hero() {
    return (
        <section className="hero">
            <h1 className="hero-title">I DON'T WANT  <br /> TO MAKE BORING WEBSITES.</h1>
            <ProjectCard title="Monsoon Archive" category="Arts & Culture" color="#3a5a40" />
            <ProjectCard title="Clear Water Fund" category="Nonprofit" color="#1d3557" />
            <ProjectCard title="Paper Trail" category="Legal Tech" color="#6b4f3a" />
            <ProjectCard title="Night Market" category="Food & Retail" color="#7a2e3b" />
        </section>
    )
}

export default Hero;