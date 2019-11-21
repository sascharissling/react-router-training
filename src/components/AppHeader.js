import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";

import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

//STYLE Start

const Search = styled(SearchIcon)`
  zoom: 1.5;
  margin: 5px;
  color: #ffe;
  &:hover {
    color: slategrey;
  }
`;

const Clear = styled(ClearIcon)`
  zoom: 1.5;
  margin: 5px;
  color: grey;
`;
const SearchButton = styled.button`
  background: transparent;
  outline: none;
  border: transparent;
  justify-content: center;
  padding: 0;
`;

const AppBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
`;

const SearchForm = styled.div`
  width: 100vw;
  display: flex;
  background: #ffe;
  justify-content: space-between;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100vw;
  height: 65px;
  background: #ffe;
  border: none;
  font-size: 1.3rem;
  padding: 14px;
`;

const ClearButton = styled.button`
  background: transparent;
  outline: none;
  border: transparent;
  justify-content: center;
  padding: 0;
  :hover {
    transform: rotate(45deg);
  }
`;

//STYLE End

export default function Header() {
  return (
    <>
      <AppBar>
        <Logo text="MovieClerk 🤵🏻" />
        <SearchButton>
          <Search></Search>
        </SearchButton>
      </AppBar>
      <SearchForm>
        <SearchInput type="text" placeholder="Search for movies..." />
        <ClearButton>
          <Clear></Clear>
        </ClearButton>
      </SearchForm>
    </>
  );
}
