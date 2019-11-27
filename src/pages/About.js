import React from "react";
import styled from "@emotion/styled";

const AboutWindow = styled.div`
  width: 90vw; 
  height 90vh; 
  background: #ffe; 
  h1 {
    color: black; 
  }
`;

export default function About() {
  return (
    <AboutWindow>
      <h1>This is the About page</h1>
    </AboutWindow>
  );
}
