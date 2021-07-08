import styled from "styled-components";

export const AboutSection = styled.section`
  height: 1000px;
  width: 100%;
  background-color: #151515;
  position: relative;
  margin-bottom: 200px;

  @media screen and (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const ShadowEffect = styled.div`
  position: absolute;
  bottom: 100%;
  height: 300px;
  width: 100%;
  left: 0;
  z-index: 20;
  background: linear-gradient(to top, #151515, transparent);
`;

export const AboutContainer = styled.div`
  height: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }

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

export const AboutContent = styled.div`
  color: #fff;
  opacity: 0;
  margin-right: 2rem;

  @media (max-width: 850px) {
    margin: 0rem;
  }
`;

export const AboutTitle = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  position: relative;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const AboutTitleBorder = styled.div`
  position: absolute;
  width: 30%;
  height: 3px;
  background-color: #fff;
  bottom: 0;
  left: 0;
`;

export const AboutText = styled.p`
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const AboutImageContainer = styled.div`
  opacity: 0;
  margin-left: 2rem;
  display: flex;
  justify-content: center;
  max-width: 500px;

  @media (max-width: 850px) {
    margin: 0 auto;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 850px) {
    width: 75%;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;
