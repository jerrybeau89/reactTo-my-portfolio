import React from "react";

const ProjectCard = ({
  title,
  description,
  image,
  imagealt,
  github,
  deployed,
}) => {
  return (
    <>
      <div className="my-2 mx-1 col-lg text-center fw-bold hoverable rounded bg-success bg-opacity-25">
        <a href={deployed} target="_blank" rel="noreferrer">
          <img
            className="img-thumbnail rounded my-2 shadow-lg bg-dark float"
            src={image}
            alt={imagealt}
          ></img>
        </a>
        <h5 className="text">{title}</h5>
        <p className="text">{description}</p>
        <div>
          <a
            className="btn btn-danger shadow-lg text"
            target="_blank"
            href={github}
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
