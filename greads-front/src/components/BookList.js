import React, { Component } from "react";
import "../App.css";
import Book from './Book'



class BookList extends Component {

  constructor(){
    super()
    this.state = {
      bookList: []
    }
  }

  bookFetcher = () => {
    fetch('http://localhost:3333/details')
    .then(response => response.json())
    .then(json => {
      this.setState({ "bookList" : json.details })
    })
  }
  

  componentDidMount(){
    this.bookFetcher()
  }



  render() {
    return (
      <div>
        <h3>this will be a list of books</h3>
        {this.state.bookList.map(book => <Book book={book}/>) }
      </div>
    );
  }
}

export default BookList;