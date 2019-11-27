import React from "react";
import styled from "@emotion/styled";

const AboutWindow = styled.div`
  width: 90vw; 
  height 90vh; 

`;

export default function About() {
  return (
    <AboutWindow>
      <h1>About </h1>
      <p>
        Welcome to this amazingly awesome react website. This is the about
        section and there is nothing to see here.
      </p>
    </AboutWindow>
  );
}
