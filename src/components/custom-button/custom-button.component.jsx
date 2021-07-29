import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({
  children,
  isGoogleButton,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} 
      ${isGoogleButton ? "sign-in-google" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
