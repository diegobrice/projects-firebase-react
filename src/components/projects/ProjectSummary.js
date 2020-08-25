import React from "react";

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p>Publicado por Diego Briceño</p>
        <p className="grey-text">20/08/2020</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
