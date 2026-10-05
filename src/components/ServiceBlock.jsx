import "./ServiceBlock.css";
import ProjectCard from "./ProjectCard";

function ServiceBlock(){
    return (
        <section className="service">
            <h2 className="service-title">STRATEGY</h2>

            <div className="service-tabs">
                <button className="tab tab-active">Workshop</button>
                <button className="tab">Retainer</button>
            </div>

            <p className="service-text">
                A focused half-day session where we untangle what your brand is
                really trying to say, and turn it into a clear direction for design.
            </p>

            <div className="service-meta">
                <span className="meta-detail">Online or in person</span>
                <span className="meta-price">From Rs. 25,000</span>

            </div>

            <a href="#contact" className="service-button">Book a Session</a>

            <div className="project-row">
        <ProjectCard title="North Studio" category="Branding" color="#4a5d7a" />
        <ProjectCard title="Saffron Lane" category="Hospitality" color="#a0662f" />
        <ProjectCard title="Open Ledger" category="Fintech" color="#2f5e55" />
        <ProjectCard title="Quiet Hours" category="Wellness" color="#6d5a7d" />
      </div>
        </section>
    )
}

export default ServiceBlock;