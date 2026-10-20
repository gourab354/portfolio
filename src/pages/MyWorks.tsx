import { Link } from "react-router-dom";
import { useProjects } from "../utils/useProjects";
import "./MyWorks.css";

const MyWorks = () => {
  const projects = useProjects();

  return (
    <div className="myworks-page">
      <div className="myworks-header">
        <Link to="/" className="back-button" data-cursor="disable">
          ← Back to Home
        </Link>
        <h1>
          All <span>Works</span>
        </h1>
        <p>A collection of all my projects and creations</p>
      </div>

      <div className="myworks-grid">
        {projects.map((project, index) => {
          const projectUrl = project.github || project.live;
          return (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="myworks-card"
              key={project.id}
              data-cursor="disable"
            >
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
                <div className="myworks-card-links">
                  {project.github && (
                    <span className="myworks-link">
                      GitHub →
                    </span>
                  )}
                  {project.live && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.open(project.live, "_blank", "noopener,noreferrer");
                      }}
                      className="myworks-link myworks-link-live"
                    >
                      Live →
                    </button>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
