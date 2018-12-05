import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import BookList from './components/BookList.js'
import EditBook from './components/EditBook.js'
import AuthorList from './components/AuthorList.js'
import SingleBook from './components/SingleBook.js'


class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/" component={Home} exact/>
          <Route path="/books" component={BookList} exact/>
          <Route path="/authors" component={AuthorList} />
          <Route path="/books/:id" component={SingleBook} />
          <Route path="/edit" component={EditBook} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
