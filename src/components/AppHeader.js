import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import { keyframes } from "@emotion/core";
import PropTypes, { string } from "prop-types";

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
  box-shadow: 0px 0px 21px 0px rgba(31, 31, 31, 1);
`;

const SearchInput = styled.input`
  width: 100vw;
  height: 65px;
  background: #ffe;
  border: none;
  font-size: 1.3rem;
  padding: 14px;
  color: #333;
  :focus {
    outline: none;
  }
`;

const flip = keyframes`
 0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
const ClearButton = styled.button`
  background: transparent;
  outline: none;
  border: transparent;
  justify-content: center;
  padding: 0;
  :hover {
    animation: ${flip} 0.4s ease;
  }
`;

//STYLE End

export default function Header({ onSearch, inputValue }) {
  const [showSearch, setShowSearch] = React.useState(false);

  function handleChange(event) {
    const value = event.target.value;
    onSearch(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      {!showSearch && (
        <AppBar>
          <Logo text="MovieClerk 🤵🏻" />
          <SearchButton active={showSearch} onClick={() => setShowSearch(true)}>
            <Search></Search>
          </SearchButton>
        </AppBar>
      )}
      {showSearch && (
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            autoFocus
            type="text"
            placeholder="Search for movies..."
            onChange={handleChange}
            value={inputValue}
          />
          <ClearButton active={showSearch} onClick={() => setShowSearch(false)}>
            <Clear></Clear>
          </ClearButton>
        </SearchForm>
      )}
    </>
  );
}

Logo.propTypes = {
  text: PropTypes.string
};
