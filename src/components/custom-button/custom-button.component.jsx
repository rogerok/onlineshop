import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleButton, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleButton ? "sign-in-google" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
