import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editToggle: false
    };
  }

  render() {
    return (
      <div className="book">
        <div className="book-info">
          <h3>{this.props.author.first}</h3>
          <p>{this.props.author.genre}</p>
          <p>{this.props.author.bio}</p>
        </div>
        <img className="author-portrait" src={this.props.author.portraitURL} alt="author portrait" />
      </div>
    );
  }
}

export default Author;