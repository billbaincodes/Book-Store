import React, { Component } from "react";
import "../App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

class ImprovedSingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookInfo: []
    };
  }  

  componentDidMount(){
    fetch(`http://localhost:3333/books/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(json => this.setState({ bookInfo : json.book }))
  }


  render() {
    return (
      <div className="book">
        <div className="book-info">
          <h3>{this.state.bookInfo.title}</h3>
          <p>{this.state.bookInfo.genre}</p>
          <p>{this.state.bookInfo.description}</p>
          <Link to="/books"><button>Back to All Books</button></Link>
        </div>
        <img className ="book-cover" src={this.state.bookInfo.coverURL} alt="book cover" />
      </div>
    );
  }
}

export default ImprovedSingleBook;