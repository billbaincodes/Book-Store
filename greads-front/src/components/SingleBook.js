import React, { Component } from "react";
import "../App.css";
import { Link } from "react-router-dom";

class SingleBook extends Component {
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
          <h3>{this.props.location.state.singleBook.title}</h3>
          <p>{this.props.location.state.singleBook.genre}</p>
          <p>{this.props.location.state.singleBook.description}</p>
        </div>
        <img className ="book-cover" src={this.props.location.state.singleBook.coverURL} alt="book cover" />
      </div>
    );
  }
}

export default SingleBook;
