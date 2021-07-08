import styled from "styled-components";

export const PortfolioContainer = styled.section`
  //   background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};
  background-color: #151515;
  margin-bottom: 200px;

  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

export const PortfolioWrapper = styled.div`
  background-color: #151515;
  border-radius: 5px;
  display: grid;
  z-index: 1;
  // height: 860px;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 700px) {
    padding: 0 15px;
  }
`;

export const ResumeDisplayAndController = styled.div`
  align-items: center !important;
  flex-direction: column !important;
  display: flex !important;
`;
