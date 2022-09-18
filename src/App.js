import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
//import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  const menus_list = [
    { component: "Home", link: "/" },
    { component: "About", link: "/about" },
    { component: "Contact", link: "/contact" },
  ];
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {menus_list.map((menu_item, index) => (
            <Route
              exact
              path={menu_item.link}
              component={menu_item.component}
              key={index}
            ></Route>
          ))}

          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
