import React from "react";
import SkillsBar from "./SkillsBar";
import {
  SkillsSection,
  SkillsContainer,
  SkillsHeader,
  SkillsHeaderBorder,
  SkillsWrapper,
  SkillsH4,
  SkillsPercentage,
} from "./SkillsChartElements";

const SkillsChart = () => {
  return (
    <SkillsSection id="skills" className="fade-in">
      <SkillsContainer>
        <SkillsHeader>
          Skills
          <SkillsHeaderBorder className="skills-border" />
        </SkillsHeader>
        <SkillsWrapper>
          <>
            <SkillsH4>Node.js</SkillsH4>
            <SkillsBar
              done="60"
              adjustTop="0px"
              adjustTop400="0px"
              adjustHeight="400px"
              adjustHeight400="400px"
            />
            <SkillsPercentage>60%</SkillsPercentage>
          </>
          <>
            <SkillsH4>React</SkillsH4>
            <SkillsBar
              done="70"
              adjustTop="-15px"
              adjustTop400="-5px"
              adjustHeight="500px"
              adjustHeight400="470px"
            />
            <SkillsPercentage>70%</SkillsPercentage>
          </>
          <>
            <SkillsH4>JavaScript</SkillsH4>
            <SkillsBar
              done="80"
              adjustTop="-35px"
              adjustTop400="-10px"
              adjustHeight="600px"
              adjustHeight400="490px"
            />
            <SkillsPercentage>80%</SkillsPercentage>
          </>
          <>
            <SkillsH4>SQL Server</SkillsH4>
            <SkillsBar
              done="80"
              adjustTop="-35px"
              adjustTop400="-10px"
              adjustHeight="600px"
              adjustHeight400="490px"
            />
            <SkillsPercentage>80%</SkillsPercentage>
          </>
          <>
            <SkillsH4>CSS/Sass</SkillsH4>
            <SkillsBar
              done="85"
              adjustTop="-40px"
              adjustTop400="-10px"
              adjustHeight="600px"
              adjustHeight400="535px"
            />
            <SkillsPercentage>85%</SkillsPercentage>
          </>
          <>
            <SkillsH4>HTML</SkillsH4>
            <SkillsBar
              done="95"
              adjustTop="-60px"
              adjustTop400="-20px"
              adjustHeight="700px"
              adjustHeight400="550px"
            />
            <SkillsPercentage>95%</SkillsPercentage>
          </>
          <>
            <SkillsH4>.NET/Core</SkillsH4>
            <SkillsBar
              done="50"
              adjustTop="20px"
              adjustTop400="20px"
              adjustHeight="400px"
              adjustHeight400="400px"
            />
            <SkillsPercentage>50%</SkillsPercentage>
          </>
          <>
            <SkillsH4>C#</SkillsH4>
            <SkillsBar
              done="55"
              adjustTop="10px"
              adjustTop400="10px"
              adjustHeight="400px"
              adjustHeight400="400px"
            />
            <SkillsPercentage>55%</SkillsPercentage>
          </>
        </SkillsWrapper>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default SkillsChart;
