import React, { Component } from "react";
import "../App.css";
import Book from "./Book";
import AddBook from "./AddBook";

class BookList extends Component {
  constructor() {
    super();
    this.state = {
      bookList: [],
      addBook: false
    };
  }

  bookFetcher = () => {
    fetch("http://localhost:3333/books")
      .then(response => response.json())
      .then(json => {
        this.setState({ bookList: json.books });
      });
  };


  componentDidMount() {
    this.bookFetcher();
  }

  addBookToggle = () => {
    this.setState({ addBook: !this.state.addBook });
  };

  render() {
    return (
      <div>
        <button onClick={this.addBookToggle}>New Book</button>
        {this.state.addBook ? (
          <AddBook
            bookFetcher={this.bookFetcher}
            addBookToggle={this.addBookToggle}
          />
        ) : (
          ''
        )}
        {this.state.bookList.map(book => (
          <Book 
            key={book.id} 
            book={book}
            bookFetcher={this.bookFetcher}
            />
        ))}
      </div>
    );
  }
}

export default BookList;
