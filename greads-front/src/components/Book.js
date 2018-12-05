import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editToggle: false
    };
  }

  deleteBook = () => {
    console.log(this.props.book)
    fetch(`https://dry-atoll-97913.herokuapp.com/books/${this.props.book.id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(this.props.bookFetcher)
      .catch(console.log("error"));
  };



  render() {
    return (
      <div className="book">
        <div className="book-info">
        <Link to={{ pathname: `/books/${this.props.book.id}`, state: { singleBook : this.props.book} }}><h3>{this.props.book.title}</h3></Link>
          <p>{this.props.book.genre}</p>
          <p>{this.props.book.description}</p>
          <button onClick={this.deleteBook}>Delete book</button>

          <Link to={{ pathname: '/edit', state: { currentBook : this.props.book} }}><button> Edit book </button></Link>
        </div>
        <img className ="book-cover" src={this.props.book.coverURL} alt="book cover" />
      </div>
    );
  }
}

export default Book;
