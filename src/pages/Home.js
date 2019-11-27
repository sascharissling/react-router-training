import React from "react";
import styled from "@emotion/styled";

const HomeWindow = styled.div`
  width: 90vw; 
  height 90vh; 
  background: #ffe; 
  * {
    color: black; 
  }
`;

export default function Home() {
  return (
    <HomeWindow>
      <h1>Home</h1>
      <p>Welcome to this amazingly awesome homepage</p>
    </HomeWindow>
  );
}
