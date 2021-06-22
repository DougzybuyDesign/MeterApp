import React from "react";
import Header from "./Components/Header";
import HelloWorld from "./Components/HelloWorld";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Header />
      <HelloWorld name="Meter App" />
      <Router>
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
