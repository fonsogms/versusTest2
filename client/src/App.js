import React from "react";
import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import SearchBar from "./components/SeachBar";
import Results from "./components/Results";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Navbar color="dark" light expand="md">
        <NavbarBrand style={{ color: "white" }} href="/">
          Versus
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar></Nav>
        </Collapse>
      </Navbar>
      <Route exact path="/" component={SearchBar} />
      <Route exact path="/:name_url" component={Results} />
    </div>
  );
}

export default App;
