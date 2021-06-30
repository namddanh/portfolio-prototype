import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { LoadingContainer } from "./LoadingElements";

const Loading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <LoadingContainer>
      <Loader type="CradleLoader" height={80} width={80} />
    </LoadingContainer>
  );
};

export default Loading;
