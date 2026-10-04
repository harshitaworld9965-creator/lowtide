import "./ProjectCard.css";

function ProjectCard({ title, category, color }) {
  return (
    <div className="project-card">
      <div className="project-image" style={{ background: color }}></div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </div>
    </div>
  )
}

export default ProjectCard;