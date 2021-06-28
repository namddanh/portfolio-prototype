import React from "react";
import Enso from "../../images/projects/ENSO.jpg";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./ProjectElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Enso} />
          <ProjectsH2>ENSO Website</ProjectsH2>
          <ProjectsP>In Progress.</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
