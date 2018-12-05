import React, { Component } from "react";
import "../App.css";

class AddAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVal: "",
      lastVal: "",
      bioVal: "",
      portraitVal: ""
    };
  }

  firstListener = event => {
    this.setState({ firstVal: event.target.value });
    console.log(this.state.firstVal);
  };

  lastListener = event => {
    this.setState({ lastVal: event.target.value });
    console.log(this.state.lastVal);
  };

  bioListener = event => {
    this.setState({ bioVal: event.target.value });
    console.log(this.state.bioVal);
  };

  portraitListener = event => {
    this.setState({ portraitVal: event.target.value });
    console.log(this.state.portraitVal);
  };

  postAuthor = event => {
    event.preventDefault();

    if (
      this.state.firstVal.length === 0 ||
      this.state.lastVal.length === 0 ||
      this.state.bioVal.length === 0 ||
      this.state.portraitVal.length === 0
    ) {
      alert("Bogus input");
    } else {
      fetch("http://localhost:3333/authors", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          first: this.state.firstVal,
          last: this.state.lastVal,
          bio: this.state.bioVal,
          portraitURL: this.state.portraitVal
        })
      })
        .then(this.props.addAuthorToggle)
        .then(this.props.authorFetcher);
    }
  };

  render() {
    return (
      <div className="new-book">
        <h3>Add a New Author.</h3>
        <form>
          <label>First Name</label>
          <input
            onChange={this.firstListener}
            type="text"
            value={this.state.firstVal}
          />
          <label>Last</label>
          <input
            onChange={this.lastListener}
            type="text"
            value={this.state.lastVal}
          />
          <label>Bio</label>
          <textarea
            onChange={this.bioListener}
            type="text"
            value={this.state.bioVal}
          />
          <label>Portrait URL</label>
          <input
            onChange={this.portraitListener}
            type="text"
            value={this.state.portraitVal}
          />
          <br />
          <br />
          <button onClick={this.postAuthor}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddAuthor;
