import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import SearchIcon from "@material-ui/icons/Search";

const AppContainer = styled.div`
  color: #ffe;
`;

const AppHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppName = styled.h1`
  margin: 5px;
`;

const Search = styled(SearchIcon)`
  zoom: 1.5;
  margin: 5px;
`;

export default function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <AppHeader>
        <AppName>MovieClerk</AppName>
        <Search></Search>
      </AppHeader>
    </AppContainer>
  );
}
