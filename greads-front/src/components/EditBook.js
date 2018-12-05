import React, { Component } from "react";
import "../App.css";

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleVal: this.props.location.state.currentBook.title,
      genreVal: this.props.location.state.currentBook.genre,
      descrVal: this.props.location.state.currentBook.description,
      coverVal: this.props.location.state.currentBook.coverURL,
      currentBook: undefined
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

  updateBook = event => { 
    event.preventDefault();
    console.log(this.props.location.state.currentBook.id)

    if (
      this.state.titleVal.length === 0 ||
      this.state.genreVal.length === 0 ||
      this.state.descrVal.length === 0 ||
      this.state.coverVal.length === 0
    ) {
      alert("Bogus input");
    } else {
      fetch(`http://localhost:3333/books/${this.props.location.state.currentBook.id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          // id: this.props.location.state.currentBook.id,
          title: this.state.titleVal,
          genre: this.state.genreVal,
          description: this.state.descrVal,
          coverURL: this.state.coverVal
        })
      })
        .then(data => console.log(data))
        .then(window.location.replace("http://localhost:3000/books/"))
    }
  };

  render() {
    return (
      <div className="new-book">
        <h3>Update a Book</h3>
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
          <textarea
            onChange={this.descriptionListener}
            type="text"
            value={this.state.descrVal}
          />
          <label>Cover URL</label>
          <input
            onChange={this.coverURLListener}
            type="text"
            defaultValue={this.props.location.state.currentBook.coverURL}
          />
          <br />
          <br />
          <button onClick={this.updateBook}>Submit Edits</button>
        </form>
      </div>
    );
  }
}

export default EditBook;