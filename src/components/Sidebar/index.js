import React from "react";
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
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            about
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            skills
          </SidebarLink>
          <SidebarLink to="portfolio" onClick={toggle}>
            portfolio
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
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
