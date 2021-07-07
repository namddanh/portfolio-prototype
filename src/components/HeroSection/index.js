import React, { useState, useEffect } from "react";
// import heroImage from "../../images/pexels/pexels-joão-jesus-cut.jpg";
// import Video from "../../videos/static-video-hs.mp4";
// import mountain1Img from "../../images/parallaxHS/img/mountain1.png";
// import mountain2Img from "../../images/parallaxHS/img/mountain2.png";
// import mountain3Img from "../../images/parallaxHS/img/mountain3.png";
// import skyImg from "../../images/parallaxHS/img/sky.png";
import mountainImg from "../../images/parallaxHS/orginal_image/pexels-rizknas.jpg";
import {
  HeroContainer,
  HeroBg,
  // VideoBg,
  HeroContent,
  HeroH1,
  // HeroP,
  ImageMountain,
  // ImageMountain1,
  // ImageMountain2,
  // ImageMountain3,
  // ImageSky,
} from "./HeroElements";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const half_heroContainerHeight = 500;
  let scroll = window.pageYOffset;

  let styleOfContent = {
    transform: `translateY(${offsetY * 0.1}px)`,
    opacity: `calc(1 - ${scroll} / ${half_heroContainerHeight})`,
  };

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg id="hero" autoPlay loop muted src={Video} type="video/mp4" /> */}
        <ImageMountain
          src={mountainImg}
          style={{ transform: `translateY(${offsetY * 0.25}px)` }}
        />
        {/* <ImageMountain1
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
        /> */}
      </HeroBg>
      <HeroContent className="hero-content" style={styleOfContent}>
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
