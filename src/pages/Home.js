import React from "react";
import styled from "@emotion/styled";

const HomeWindow = styled.div`
  width: 90vw; 
  height 90vh; 
`;

export default function Home() {
  return (
    <HomeWindow>
      <h1>Home</h1>
      <p>Welcome to this amazingly awesome homepage. Please click yourself through the Shop to buy weird stuff that makes parents angry around the world.</p>
    </HomeWindow>
  );
}
