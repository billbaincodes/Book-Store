import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksByAuthor: [],
      editToggle: false
    };
  }

  booksByAuthorFetcher = () => {
    fetch(
      `http://localhost:3333/details/author/${this.props.author.id}`
    )
      .then(response => response.json())
      .then(data => this.setState({ booksByAuthor: data.details }));
  };

  componentDidMount() {
    this.booksByAuthorFetcher();
  }

  render() {
    return (
      <div className="book">
        <div className="book-info">
          <h3>{this.props.author.first} {this.props.author.last}</h3>
          <p>{this.props.author.genre}</p>
          <p>{this.props.author.bio}</p>
          <ul> Books by {this.props.author.first}
          {this.state.booksByAuthor.map(book => (
            <a href={`http://localhost:3000/books/${book.id}`}>{book.title}</a>
          ))}
          </ul>
        </div>
        <img
          className="author-portrait"
          src={this.props.author.portraitURL}
          alt="author portrait"
        />
      </div>
    );
  }
}

export default Author;
