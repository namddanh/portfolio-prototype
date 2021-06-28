import React, { useState } from "react";
import { SkillsBarOuter, SkillsBarInner } from "./SkillsChartElements";

const SkillsBar = ({
  done,
  adjustTop,
  adjustTop400,
  adjustHeight,
  adjustHeight400,
}) => {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <SkillsBarOuter>
      <SkillsBarInner
        adjustTop={adjustTop}
        adjustTop400={adjustTop400}
        adjustHeight={adjustHeight}
        adjustHeight400={adjustHeight400}
        style={style}
      />
    </SkillsBarOuter>
  );
};

export default SkillsBar;
