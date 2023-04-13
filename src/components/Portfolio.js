import React from 'react';
import ProjectCard from '../assets/js/ProjectCard';
import { projects } from '../assets/js/Projects';

const Portfolio = () => {
    return (
      <>
      <div class="grid container my-5">
        <h3>Projects</h3>
          <div class="col-lg-4 text-center hoverable align-self-center rounded bg-secondary">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project}/>
            ))}
          </div>
      </div>
      </>
    );
  };
 
export default Portfolio;