import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { LoadingContainer } from "./LoadingElements";

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  const loaderStyle = {
    margin: 0,
    position: "absolute",
    top: "50%",
    right: "40%",
    transform: "translateY(-50%)",
  };

  return (
    <LoadingContainer>
      <Loader style={loaderStyle} type="CradleLoader" height={80} width={80} />
    </LoadingContainer>
  );
};

export default Loading;
