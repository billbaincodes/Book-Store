import React, { Component } from "react";
import "../App.css";
import Author from './Author'
import AddAuthor from './AddAuthor'


class AuthorList extends Component {
  constructor() {
    super();
    this.state = {
      authorList: [],
      addAuthor: false
    };
  }

  authorFetcher = () => {
    fetch("http://localhost:3333/authors")
      .then(response => response.json())
      .then(json => {
        this.setState({ authorList: json.authors });
      });
  };

  componentDidMount(){
    this.authorFetcher()
  }

  addAuthorToggle = () => {
    this.setState({ addAuthor: !this.state.addAuthor });
  };


  render() {
    return (
      <div>
        <h3>this will be a list of authors</h3>
        <button onClick={this.addAuthorToggle}>Add a New Author</button>
        {this.state.addAuthor ? (
          <AddAuthor
            authorFetcher={this.authorFetcher}
            addAuthorToggle={this.addAuthorToggle}
          />
        ) : (
          ''
        )}
        {this.state.authorList.map(author => (
          <Author 
            key={author.id} 
            author={author}
            authorFetcher={this.authorFetcher}
            />
        ))}
      </div>
    );
  }
}

export default AuthorList;