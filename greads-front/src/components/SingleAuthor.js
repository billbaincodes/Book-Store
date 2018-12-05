import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class SingleAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorInfo: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3333/authors/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(json => this.setState({ authorInfo: json.author }));
  }

  render() {
    return (
      <div className="book">
        <div className="book-info">
          <h3>
            {this.state.authorInfo.first} {this.state.authorInfo.last}
          </h3>
          <p>{this.state.authorInfo.bio}</p>
          {/* <p>{this.state.bookInfo.description}</p> */}
          <Link to="/authors">
            <button>Back to All Authors</button>
          </Link>
        </div>
        <img
          className="author-portrait"
          src={this.state.authorInfo.portraitURL}
          alt="book cover"
        />
      </div>
    );
  }
}

export default SingleAuthor;
