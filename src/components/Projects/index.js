import React, { useEffect } from "react";
import Enso from "../../images/projects/ENSO.jpg";
import Aos from "aos";
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <ProjectsContainer id="projects" data-aos="fade-right">
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
