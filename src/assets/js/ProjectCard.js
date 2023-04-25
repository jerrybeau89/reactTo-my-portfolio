import React from 'react';


const ProjectCard = ({title, description, image, imagealt, github, deployed}) => {
    return (
      <>
      <div className="my-5 col-lg-4">   
        <div className="row">
          <div className="col text-center hoverable  rounded bg-secondary">
            <a href={deployed} target="_blank"  rel="noreferrer">
              <img className="project-img shadow-lg bg-dark float mx-auto" src={image} alt={imagealt}></img>
            </a>
            <h5>{title}</h5>
            <p>{description}</p>
            <div><a className="btn btn-success text-light" target="_blank" href={github} rel="noreferrer"></a>GitHub</div>
          </div>
        </div>
      </div>
      </>
    );
  };
 
export default ProjectCard;