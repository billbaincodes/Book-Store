import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorsOfBook: [],
      editToggle: false
    };
  }

  deleteBook = () => {
    console.log(this.props.book);
    fetch(`http://localhost:3333/books/${this.props.book.id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(this.props.bookFetcher)
      .catch(console.log("error"));
  };

  getAuthorsOfBookFetcher = () => {
    fetch(`http://localhost:3333/details/book/${this.props.book.id}`)
      .then(response => response.json())
      .then(json => this.setState({ authorsOfBook: json.details }));
  };

  componentDidMount = () => {
    this.getAuthorsOfBookFetcher();
  };

  render() {
    return (
      <div className="book">
        <div className="book-info">
          <Link
            to={{
              pathname: `/books/${this.props.book.id}`,
              state: { singleBook: this.props.book }
            }}
          >
            <h3>{this.props.book.title}</h3>
          </Link>
          <ul>
            {" "}
            Written By:
            {this.state.authorsOfBook.map(author => (
              <li>
                <a href={`http://localhost:3000/authors/${author.author_id}`}>
                  {author.first} {author.last}
                </a>
              </li>
            ))}
          </ul>
          <p>{this.props.book.genre}</p>
          <p>{this.props.book.description}</p>
          <button onClick={this.deleteBook}>Delete book</button>

          <Link
            to={{ pathname: "/edit", state: { currentBook: this.props.book } }}
          >
            <button> Edit book </button>
          </Link>
        </div>
        <img
          className="book-cover"
          src={this.props.book.coverURL}
          alt="book cover"
        />
      </div>
    );
  }
}

export default Book;
