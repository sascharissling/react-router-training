import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/AppHeader.js";
import MovieList from "./components/MovieList";

const AppContainer = styled.div`
  color: #ffe;
`;

const SearchResults = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <SearchResults>
        <MovieList />
      </SearchResults>
    </AppContainer>
  );
}
