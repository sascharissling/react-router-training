import React from "react";
import styled from "@emotion/styled";

const HomeWindow = styled.div`
  width: 90vw; 
  height 90vh; 
  background: #ffe; 
  h1 {
    color: black; 
  }
`;

export default function Home() {
  return (
    <HomeWindow>
      <h1>This is the Home page</h1>
    </HomeWindow>
  );
}
