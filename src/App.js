import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/AppHeader.js";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";

const AppContainer = styled.div`
  color: #ffe;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Router>
      <Header />
      <AppContainer>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </AppContainer>
    </Router>
  );
}
