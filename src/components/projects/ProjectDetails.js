import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Titulo del Proyecto - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            tempora ad doloremque neque eos. Optio, repellat ut sequi ad nulla
            tenetur quia eveniet cum minus quaerat facilis corrupti, ducimus
            animi?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Publicado por Diego Briceño</div>
          <div>20/08/2020</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
