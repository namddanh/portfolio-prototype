import styled from "styled-components";
// import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.section`
  position: relative;
  background: #151515;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 30px;
  padding: 0;
  margin: 0;
  height: 1000px;
  z-index: 1;

  // :before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: linear-gradient(
  //       180deg,
  //       rgba(0, 0, 0, 0.2) 0%,
  //       rgba(0, 0, 0, 0.6) 100%
  //     ),
  //     linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  //   z-index: 2;
  // }
`;

export const HeroBg = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // height: 100vh;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.05);
    z-index: 25;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 25;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImageMountain1 = styled.img`
  position: absolute;
  bottom: 0px;
  width: 2000px;
  right: 0px;
  z-index: 19;
`;

export const ImageMountain2 = styled.img`
  position: absolute;
  bottom: 0px;
  width: 2000px;
  right: 0;
  z-index: 18;
`;

export const ImageMountain3 = styled.img`
  position: absolute;
  bottom: -1px;
  width: 2000px;
  right: 0;
  z-index: 17;
`;

export const ImageSky = styled.img`
  position: absolute;
  bottom: 370px;
  width: 2000px;
  right: 0;
  z-index: 16;
`;
