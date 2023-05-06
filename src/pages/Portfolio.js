import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../components/Projects';

const Portfolio = () => {
    return (
      <>
      <div className="grid container my-3">
        <h3>Projects</h3>
          <div className="col text-center align-self-center rounded">
            <div className='row'>
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