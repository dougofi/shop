import React from "react";
import "./App.scss";
import Homepage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
