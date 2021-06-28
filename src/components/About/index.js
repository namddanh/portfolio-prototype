import React, { useEffect, useRef } from "react";
import portraitAbout from "../../images/about/portraitAbout.jpg";
import {
  AboutSection,
  ShadowEffect,
  AboutContainer,
  AboutContent,
  AboutTitle,
  AboutTitleBorder,
  AboutText,
  AboutImageContainer,
  AboutImage,
} from "./AboutElements";

const About = () => {
  const sectionAboutRef = useRef(null);

  const handleScroll = () => {
    // const content = document.querySelector(".content");
    // const image_container = document.querySelector(".imgContainer");
    const shadow = document.querySelector(".shadow-effect");
    const opacity = document.querySelectorAll(".opacity");
    const about_border = document.querySelector(".about-border");

    let scroll = window.pageYOffset;

    let sectionAboutHeight = sectionAboutRef.current.clientHeight;
    let sectionY = sectionAboutRef.current.getBoundingClientRect();

    shadow.style.height = `${scroll * 0.5 + 300}px`;

    opacity.forEach((element) => {
      element.style.opacity = scroll / (sectionY.top + sectionAboutHeight);
    });

    about_border.style.width = `${
      (scroll / (sectionY.top + sectionAboutHeight)) * 30
    }%`;

    if (sectionY.top < -300) {
      about_border.style.display = "none";
    } else {
      about_border.style.display = "block";
    }

    // content.style.transform = `translateY(${
    //   (scroll / (sectionAboutHeight + sectionY.top)) * 50 - 50
    // }px)`;

    // image_container.style.transform = `translateY(${
    //   (scroll / (sectionAboutHeight + sectionY.top)) * -50 + 50
    // }px)`;

    // hero_content.style.opacity = -scroll / (heroContainerHeight / 2) + 1;
  };

  useEffect(() => {
    sectionAboutRef.current.focus();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AboutSection id="about" ref={sectionAboutRef}>
      <ShadowEffect className="shadow-effect" />
      <AboutContainer>
        <AboutContent className="content opacity">
          <AboutTitle>
            About
            <AboutTitleBorder className="about-border" />
          </AboutTitle>
          <AboutText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </AboutText>
        </AboutContent>
        <AboutImageContainer className="imgContainer opacity">
          <AboutImage src={portraitAbout} />
        </AboutImageContainer>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
