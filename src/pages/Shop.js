import React from "react";
import styled from "@emotion/styled";

const ShopWindow = styled.div`
  width: 90vw; 
  height 90vh; 
  background: #ffe; 
  h1 {
    color: black; 
  }
`;

export default function Shop() {
  return (
    <ShopWindow>
      <h1>This is the Shop page</h1>
    </ShopWindow>
  );
}
