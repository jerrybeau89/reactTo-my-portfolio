import React from 'react';


const ProjectCard = ({title, description, image, imagealt, github, deployed}) => {
    return (
      <>
          <div className="my-2 mx-1 col-lg-3 text-center hoverable rounded bg-secondary">
            <a href={deployed} target="_blank"  rel="noreferrer">
              <img className="project-img shadow-lg bg-dark float" src={image} alt={imagealt}></img>
            </a>
            <h5>{title}</h5>
            <p>{description}</p>
            <div><a className="btn btn-success text-light" target="_blank" href={github} rel="noreferrer"></a>GitHub</div>
          </div>
      </>
    );
  };
 
export default ProjectCard;