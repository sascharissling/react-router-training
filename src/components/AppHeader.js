import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import { keyframes } from "@emotion/core";

import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";

//STYLE Start

const Search = styled(MenuIcon)`
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
  color: #ffe;
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

const Navigation = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: transparent;
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

const MenuItem = styled.a`
  cursor: pointer;
  h3 {
    &:hover {
      color: darkslategray;
    }
  }
`;

//STYLE End

export default function Header() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <>
      {!showNav && (
        <AppBar>
          <Logo text="SickApp 🤵🏻" />
          <SearchButton active={showNav} onClick={() => setShowNav(true)}>
            <Search></Search>
          </SearchButton>
        </AppBar>
      )}
      {showNav && (
        <Navigation>
          <MenuItem href="/">
            <h3>Home</h3>
          </MenuItem>
          <MenuItem href="/about">
            <h3>About</h3>
          </MenuItem>
          <MenuItem href="/shop">
            <h3>Shop</h3>
          </MenuItem>
          <ClearButton active={showNav} onClick={() => setShowNav(false)}>
            <Clear></Clear>
          </ClearButton>
        </Navigation>
      )}
    </>
  );
}
