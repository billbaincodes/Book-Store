import React, { Component } from "react";
import "../App.css";

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleVal: "",
      genreVal: "",
      descrVal: "",
      coverVal: ""
    };
  }

  titleListener = event => {
    this.setState({ titleVal: event.target.value });
    console.log(this.state.titleVal);
  };

  genreListener = event => {
    this.setState({ genreVal: event.target.value });
    console.log(this.state.genreVal);
  };

  descriptionListener = event => {
    this.setState({ descrVal: event.target.value });
    console.log(this.state.descrVal);
  };

  coverURLListener = event => {
    this.setState({ coverVal: event.target.value });
    console.log(this.state.coverVal);
  };

  postBook = event => {
    event.preventDefault();

    if (
      this.state.titleVal.length === 0 ||
      this.state.genreVal.length === 0 ||
      this.state.descrVal.length === 0 ||
      this.state.coverVal.length === 0
    ) {
      alert("Bogus input");
    } else {
      fetch("https://dry-atoll-97913.herokuapp.com/books", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.state.titleVal,
          genre: this.state.genreVal,
          description: this.state.descrVal,
          coverURL: this.state.coverVal
        })
      })
        .then(this.props.addBookToggle)
        .then(this.props.bookFetcher);
    }
  };

  render() {
    return (
      <div className="new-book">
        <h3>Add a new book.</h3>
        <form>
          <label>Title</label>
          <input
            onChange={this.titleListener}
            type="text"
            value={this.state.titleVal}
          />
          <label>Genre</label>
          <input
            onChange={this.genreListener}
            type="text"
            value={this.state.genreVal}
          />
          <label>Description</label>
          <input
            onChange={this.descriptionListener}
            type="text"
            value={this.state.descrVal}
          />
          <label>Cover URL</label>
          <input
            onChange={this.coverURLListener}
            type="text"
            value={this.state.coverVal}
          />
          <br />
          <br />
          <button onClick={this.postBook}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddBook;
