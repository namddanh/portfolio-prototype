import React, { useState, useEffect, useRef } from "react";
// import heroImage from "../../images/pexels/pexels-joão-jesus-cut.jpg";
// import Video from "../../videos/static-video-hs.mp4";
import mountain1Img from "../../images/parallaxHS/img/mountain1.png";
import mountain2Img from "../../images/parallaxHS/img/mountain2.png";
import mountain3Img from "../../images/parallaxHS/img/mountain3.png";
import skyImg from "../../images/parallaxHS/img/sky.png";
import {
  HeroContainer,
  HeroBg,
  // VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ImageMountain1,
  ImageMountain2,
  ImageMountain3,
  ImageSky,
} from "./HeroElements";

const HeroSection = () => {
  const heroContainerRef = useRef(null);

  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);

    const hero_content = document.querySelector(".hero-content");

    let scroll = window.pageYOffset;
    let heroContainerHeight = heroContainerRef.current.clientHeight;

    hero_content.style.opacity = -scroll / (heroContainerHeight / 2) + 1;
  };

  useEffect(() => {
    heroContainerRef.current.focus();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroContainer ref={heroContainerRef} id="home">
      <HeroBg>
        {/* <VideoBg id="hero" autoPlay loop muted src={Video} type="video/mp4" /> */}
        <ImageMountain1
          src={mountain1Img}
          alt=""
          style={{ transform: `translateY(${offsetY * 0.25}px)` }}
        />
        <ImageMountain2
          src={mountain2Img}
          alt=""
          style={{ transform: `translateY(${offsetY * 0.25}px)` }}
        />
        <ImageMountain3
          src={mountain3Img}
          alt=""
          style={{ transform: `translateY(${offsetY * 0.25}px)` }}
        />
        <ImageSky
          src={skyImg}
          alt=""
          style={{ transform: `translateY(${offsetY * 0.25}px)` }}
        />
      </HeroBg>
      <HeroContent
        className="hero-content"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <HeroH1>Welcome to my website!</HeroH1>
        {/* <HeroP>
          I'm a Front-End web developer with commercial experience creating
          successful websites.
        </HeroP> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
