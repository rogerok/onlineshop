import styled, { css } from "styled-components";

const customButtonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const googleSignInButtonStyles = css`
  background-color: #4285f4;
  color: #ffffff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
`;

const getButtonStyles = (props) => {
  if (props.isGoogleButton) return googleSignInButtonStyles;

  return props.inverted ? invertedButtonStyles : customButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  ${getButtonStyles}
`;
