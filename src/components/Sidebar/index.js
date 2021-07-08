import React, { useState, useEffect } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnContainer,
  SideBtnLink,
  SideBtnSpan,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => window.removeEventListener("scroll", changeNav);
  }, []);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            exact="true"
            offset={-30}
          >
            about
          </SidebarLink>
          <SidebarLink
            to="skills"
            onClick={toggle}
            smooth={true}
            duration={500}
            exact="true"
            offset={-100}
          >
            skills
          </SidebarLink>
          <SidebarLink
            to="portfolio"
            onClick={toggle}
            smooth={true}
            duration={500}
            exact="true"
            offset={-80}
          >
            portfolio
          </SidebarLink>
          <SidebarLink
            to="projects"
            onClick={toggle}
            smooth={true}
            duration={500}
            exact="true"
          >
            projects
          </SidebarLink>
        </SidebarMenu>
        <SideBtnContainer>
          <SideBtnLink to="/contact">
            <SideBtnSpan>Contact</SideBtnSpan>
          </SideBtnLink>
        </SideBtnContainer>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
