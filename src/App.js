import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import Components
import Header from "./components/AppHeader.js";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ItemDetail from "./components/ItemDetail";

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
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </AppContainer>
    </Router>
  );
}
