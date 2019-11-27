import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import { keyframes } from "@emotion/core";
import { Link } from "react-router-dom";

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

const LinkName = styled.h3`
  color: #ffe;
  font-size: 1.2rem;
  &:hover {
    color: black;
  }
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

//STYLE End

export default function Header() {
  const [showNav, setShowNav] = React.useState(false);

  return (
    <>
      {!showNav && (
        <AppBar>
          <Logo text="🐲" />
          <SearchButton active={showNav} onClick={() => setShowNav(true)}>
            <Search></Search>
          </SearchButton>
        </AppBar>
      )}
      {showNav && (
        <Navigation>
          <Link to="/" style={{ textDecoration: "none" }}>
            <LinkName>Home</LinkName>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <LinkName>About</LinkName>
          </Link>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <LinkName>Shop</LinkName>
          </Link>
          <ClearButton active={showNav} onClick={() => setShowNav(false)}>
            <Clear></Clear>
          </ClearButton>
        </Navigation>
      )}
    </>
  );
}
