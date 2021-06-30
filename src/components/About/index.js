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
    const shadow = document.querySelector(".shadow-effect");
    const opacity = document.querySelectorAll(".opacity");
    const about_border = document.querySelector(".about-border");

    let scroll = window.pageYOffset;

    if (sectionAboutRef.current != null) {
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
    }
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
            About Me
            <AboutTitleBorder className="about-border" />
          </AboutTitle>
          <AboutText>
            Hi i'm Nam, a front-end developer that is based in Mississauga, ON.
            <br />
            <br />
            As a graduate from the Computer Science program at Ryerson
            University with a minor in Software Engineering, I strive to be
            creative in everything I do while also finding simple solutions to
            every new task. I have found a liking to web development from
            building web applications from the ground up while also ensuring the
            user interface is structurally-sound and aesthetically pleasing. I'm
            naturally curious, outlandishly enthusiastic, and always am
            improving my craft one problem at a time.
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
