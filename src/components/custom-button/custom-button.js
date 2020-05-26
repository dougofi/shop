import React from "react";

import "./custom-button.styles.scss";

import styled from "styled-components";

const Text = styled.div`
  color: red;
  font-size: "24px";
`;

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button ${
      inverted ? "inverted" : ""
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
