import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Container/Home";
import About from "./Container/About";
import Gallery from "./Container/Gallery";
import Contact from "./Container/Contact";
import Navbar from "./Components/Navbar/Index";
import Footer from "./Components/Footer/Index";
function App() {
  return (
    <BrowserRouter>
       <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
      </Switch>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
