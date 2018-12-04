import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Booklist from './components/BookList.js'


class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" component={Home} exact/>
          <Route path="/books" component={Booklist} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
