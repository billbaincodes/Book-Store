import React, { Component } from "react";
import "../App.css";
import Author from './Author'


class AuthorList extends Component {
  constructor() {
    super();
    this.state = {
      authorList: [],
      addAuthor: false
    };
  }

  bookFetcher = () => {
    fetch("https://dry-atoll-97913.herokuapp.com/authors")
      .then(response => response.json())
      .then(json => {
        this.setState({ authorList: json.authors });
      });
  };

  componentDidMount(){
    this.bookFetcher()
  }


  render() {
    return (
      <div>
        <h3>this will be a list of authors</h3>
        {this.state.authorList.map(author => (
          <Author 
            key={author.id} 
            author={author}
            />
        ))}
      </div>
    );
  }
}

export default AuthorList;