import styled, { keyframes } from "styled-components";

export const SkillsSection = styled.section`
  width: 100%;
  background-color: #151515;
  position: relative;
  z-index: 0;
  margin-bottom: 200px;

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 260px) {
    margin-left: 15px;
    margin-right: 15px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media screen and (min-width: 1000px) {
    margin-left: 100px;
    margin-right: 100px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 200px;
    margin-right: 200px;
  }

  @media screen and (min-width: 1500px) {
    margin-left: 300px;
    margin-right: 300px;
  }
`;

export const SkillsHeader = styled.h3`
  // padding-bottom: 0.5rem;
  // margin-bottom: 2rem;
  // border-bottom: 1px solid #dbdbdb;
  // // text-align: left;

  width: 100%;
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  position: relative;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const SkillsHeaderBorder = styled.div`
  position: absolute;
  width: 10%;
  height: 3px;
  background: linear-gradient(to left, #151515, #82ecec);
  bottom: 0;
  left: 0;
  border-radius: 5px;
`;

export const SkillsH4 = styled.h4`
  color: #fff;
  font-size: 1vw;
  align-self: center;
  margin: unset;

  @media screen and (max-width: 1200px) {
    font-size: 1.5vw;
  }

  @media screen and (max-width: 768px) {
    font-size: 2.2vw;
  }
`;

export const SkillsPercentage = styled.p`
  color: #fff;
  text-align: right;
  font-size: 1vw;
  align-self: center;
  margin: unset;
  display: block;

  @media screen and (max-width: 1200px) {
    font-size: 1.5vw;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 15% 80% 5%;
  grid-row-gap: 1em;
  // grid-column-gap: 1em;
  /* grid-gap: 1em; */
  width: 100%;

  @media screen and (max-width: 600px) {
    grid-template-columns: 15% 85%;
    grid-row-gap: 0.7em;
  }
`;

export const SkillsBarOuter = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #151515;
  height: 30px;
  width: 100%;
  text-align: right;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -1;
    border-radius: 7px;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #fff;
    z-index: -2;
    filter: blur(20px);
  }

  &::before,
  &::after {
    background: linear-gradient(182deg, #151515, #151515, #9c909b);
  }
`;

const animate = keyframes`
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
`;

export const SkillsBarInner = styled.div`
  position: relative;
  background: linear-gradient(to left, #9c909b, #151515);
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 1);
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  top: 0;
  left: 0;
  transition: 1s ease;
  width: 0;
  opacity: 0;
  overflow: hidden;

  &::after,
  &::before {
    content: "";

    @media screen and (max-width: 1024px) {
      width: 110%;
      height: ${(props) => props.adjustHeight};
      position: absolute;
      top: calc(-90px + ${(props) => props.adjustTop});
      left: 50%;
      transform: translate(-50%, -75%);
    }

    @media screen and (max-width: 999px) {
      top: calc(-110px + ${(props) => props.adjustTop});
    }

    @media screen and (max-width: 950px) {
      top: calc(-95px + ${(props) => props.adjustTop});
    }

    @media screen and (max-width: 899px) {
      top: calc(-90px + ${(props) => props.adjustTop});
    }

    @media screen and (max-width: 600px) {
      height: calc(-100px + ${(props) => props.adjustHeight});
      top: calc(-70px + ${(props) => props.adjustTop});
    }

    @media screen and (max-width: 400px) {
      height: calc(-220px + ${(props) => props.adjustHeight400});
      top: calc(-40px + ${(props) => props.adjustTop400});
    }
  }

  &::before {
    border-radius: 65%;
    // background: rgba(#d8d8d8, 1);
    animation: ${animate} 5s linear infinite;
    background: #151515;
    opacity: 1;

    @media screen and (max-width: 1024) {
    }
  }

  &::after {
    border-radius: 65%;
    // background: rgba(#d8d8d8, 0.5);
    animation: ${animate} 10s linear infinite;
    background: #151515;
    opacity: 0.5;
  }

  &:hover::after,
  &:hover::before {
    top: calc(-400px + ${(props) => props.adjustTop});
    transition: 1s ease;
  }
`;
