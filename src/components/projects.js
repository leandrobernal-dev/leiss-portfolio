import React from "react";

export default function Projects() {
  const projects = [
    {
      name: "Web Development Portfolio",
      description:
        "My personal Web development and web design services portfolio.",
      tools: "Built using: html5, css3, javascript es6, react-js, j-query",
      image: "web-portfolio-project 2.png",
      imageAlt: "front-end developer portfolio web UI UX designer",
    },
    {
      name: "Bookeeping Services Portfolio",
      description: "A bookeeping services company website portfolio.",
      tools:
        "Built using: html5, css3 || tailwind-css, javascript es6,react-js, j-query",
      image: "bookeeping 1.png",
      imageAlt: "bookeeping website portfolio",
    },
    {
      name: "Paper-flip",
      description: "My meme and inspirational images generator.",
      tools:
        " Built using: html5, css3 || sass, javascript es6, react-js, j-query",
      image: "paper-flip-projects.png",
      imageAlt: "personal project, meme generator, inspirational generator",
      api: "pexels-api, img-flip api",
    },
  ];
  const projectsElements = projects.map((project) => {
    return (
      <div className="bookeeping-project">
        <div className="project-description">
          <div>
            <h2>{project.name}</h2>
            <br />
            <h4>{project.description}</h4>
            <p>{project.tools}</p>
            <p>{project.api ? `Api: ${project.api}` : ""}</p>
          </div>
        </div>
        <div className="project-image">
          <img
            alt={project.imageAlt}
            src={require(`../assets/images/${project.image}`)}
          />
        </div>
      </div>
    );
  });

  window.addEventListener("scroll", () => {
    function isVisible(ele) {
      const { top, bottom } = ele.getBoundingClientRect();
      const vHeight =
        window.innerHeight || document.documentElement.clientHeight;

      return (top > 0 || bottom > 0) && top < vHeight;
    }
    const projectImage = document.querySelectorAll(".project-image");

    projectImage.forEach((image, index) => {
      setTimeout(() => {
        if (isVisible(image)) {
          image.classList.add("move-project-image-left");
        }
      }, index * 100);
    });
  });
  return (
    <section id="projects" className="projects">
      <div className="projects-column">
        <h3 className="projects-head-text">MY PROJECTS</h3>

        <h1 className="projects-head-text2">
          RECENT <span>PROJECTS.</span>
        </h1>

        <div className="projects-container">
          {/*  */}
          {/*  */}
          {projectsElements}
        </div>
      </div>
    </section>
  );
}
