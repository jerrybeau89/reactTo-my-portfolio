import React from 'react';
import ProjectCard from '../assets/js/ProjectCard';
import { projects } from '../assets/js/Projects';

const Portfolio = () => {
    return (
      <>
      <div className="grid container my-5">
        <h3>Projects</h3>
        <div className='row'>
          <div className="col text-center align-self-center rounded">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project}/>
            ))}
          </div>
          </div>
      </div>
      </>
    );
  };
 
export default Portfolio;