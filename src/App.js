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
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [movieSearchValue, setMovieSearchValue] = React.useState("Leon");

  function handleSearch(value) {
    setMovieSearchValue(value);
  }

  return (
    <AppContainer>
      <GlobalStyles />
      <Header onSearch={handleSearch} inputValue={movieSearchValue} />
      <SearchResults>
        <MovieList searchValue={movieSearchValue} />
      </SearchResults>
    </AppContainer>
  );
}
