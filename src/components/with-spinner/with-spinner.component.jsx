import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay></SpinnerOverlay>
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...props} />
    );
  };

export default WithSpinner;

/* 
import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...props }) => {
    isLoading ? (
      <SpinnerContainer>
        <SpinnerOverlay></SpinnerOverlay>
      </SpinnerContainer>
    ) : (
      <WrappedComponent {...props} />
    );
  };

export default WithSpinner; */
