import React from 'react';

const ProjectCard = (title, description, image, imagealt, github, deployed) => {
    return (
      <>
      <div class="grid container my-5">
        <div class="row">
          <div class="col-lg-4 text-center hoverable align-self-center rounded bg-secondary">
            <img class="P1-img shadow-lg bg-dark float mx-auto" src={require({image})} alt={imagealt}></img>
            <h5>{title}</h5>
            <p>{description}</p>
            
            <ul>
              <li><a class="btn btn-success text-light" target="_blank" href={github} rel="noreferrer"></a>GitHub</li>
              <li><a class="btn btn-success text-light" target="_blank" href={deployed} rel="noreferrer"></a>Application</li>
            </ul>
          </div>
        </div>
      </div>
      </>
    );
  };
 
export default ProjectCard;