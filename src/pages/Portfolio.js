import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/Projects";

const Portfolio = () => {
  return (
    <>
      <div className="container col-10 my-3">
        <h3 className="fw-bold">Projects</h3>
      </div>
      <div className=" container col-10 text-center fw-bold rounded">
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
