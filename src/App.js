import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/AppHeader.js";

const AppContainer = styled.div`
  color: #ffe;
`;

export default function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
    </AppContainer>
  );
}
