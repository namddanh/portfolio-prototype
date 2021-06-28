import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchPlus,
  faSearchMinus,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  ControlPanelContainer,
  ControlPanelProperty,
  ControlPanelZoomDisplay,
  ControlPanelDownloadResume,
} from "./ControlPanelElements";

const ControlPanel = ({ scale, setScale, fileUrl }) => {
  const isMinZoom = scale <= 0.6;
  const isMaxZoom = scale >= 2.0;

  const zoomOutClass = isMinZoom ? "disabled" : "clickable";
  const zoomInClass = isMaxZoom ? "disabled" : "clickable";

  const zoomOut = () => {
    if (!isMinZoom) setScale(scale - 0.1);
  };

  const zoomIn = () => {
    if (!isMaxZoom) setScale(scale + 0.1);
  };

  return (
    <ControlPanelContainer>
      <ControlPanelProperty>
        <FontAwesomeIcon
          icon={faSearchMinus}
          className={` ${zoomOutClass}`}
          onClick={zoomOut}
        />
      </ControlPanelProperty>

      <ControlPanelZoomDisplay>
        {(scale * 100).toFixed()}%
      </ControlPanelZoomDisplay>

      <ControlPanelProperty>
        <FontAwesomeIcon
          icon={faSearchPlus}
          className={` ${zoomInClass}`}
          onClick={zoomIn}
        />
      </ControlPanelProperty>

      <ControlPanelProperty>
        <ControlPanelDownloadResume href={fileUrl} download={true}>
          <FontAwesomeIcon icon={faFileDownload} />
        </ControlPanelDownloadResume>
      </ControlPanelProperty>
    </ControlPanelContainer>
  );
};

export default ControlPanel;
