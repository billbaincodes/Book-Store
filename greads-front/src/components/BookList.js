import React, { Component } from "react";
import "../App.css";
import Book from './Book'
import AddBook from './AddBook'



class BookList extends Component {

  constructor(){
    super()
    this.state = {
      bookList: [],
      addBook: false
    }
  }

  bookFetcher = () => {
    fetch('https://dry-atoll-97913.herokuapp.com/books')
    .then(response => response.json())
    .then(json => {
      this.setState({ "bookList" : json.books })
    })
  }
  
  componentDidMount(){
    this.bookFetcher()
  }

  addBookToggle = () => {
    this.setState({addBook : !this.state.addBook})
  }




  render() {
    return (
      <div>
        <h3>this is a list of all books</h3>
        <button onClick={this.addBookToggle}>New Book</button>
        {this.state.addBook ? <AddBook  bookFetcher={this.bookFetcher}
                                        addBookToggle={this.addBookToggle}
        /> : console.log('false')}
        {this.state.bookList.map(book => <Book key={book.id} book={book}/>) }
      </div>
    );
  }
}

export default BookList;