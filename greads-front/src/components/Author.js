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

  deleteAuthor = () => {
    console.log(this.props.author.id);
    fetch(`http://localhost:3333/authors/${this.props.author.id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(this.props.authorFetcher)
      .catch(console.log("error"));
  };

  booksByAuthorFetcher = () => {
    fetch(`http://localhost:3333/details/author/${this.props.author.id}`)
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
        <Link to={{ pathname: `/authors/${this.props.author.id}`, state: { singleBook : this.props.author} }}> <h3>
            {this.props.author.first} {this.props.author.last}
          </h3>
          </Link>
          <p>{this.props.author.genre}</p>
          <p>{this.props.author.bio}</p>
          <button onClick={this.deleteAuthor}>Delete Author</button>
          <ul>
            Books by {this.props.author.first}
            {this.state.booksByAuthor.map(book => (
              <li>
                <a href={`http://localhost:3000/books/${book.id}`}>
                  {book.title}
                </a>
              </li>
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
