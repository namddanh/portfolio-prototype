import styled from "styled-components";
import { Link } from "react-router-dom";

export const ControlPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  background-color: #f3f3f3;
  border-radius: 5px;
`;

export const ControlPanelProperty = styled.div`
  margin-left: 0.5rem !important;
  margin-right: 0.5rem !important;

  &:hover {
    color: #9d919c;
  }
`;

export const ControlPanelZoomDisplay = styled.span``;

export const ControlPanelDownloadResume = styled(Link)`
  color: #000;

  &:hover {
    color: #9d919c;
  }
`;
