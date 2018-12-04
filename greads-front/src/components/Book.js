import React from "react";
import "../App.css";


const Book = ({ book, bookFetcher }) => {

  const deleteBook = () => {

    console.log(book.id)

    fetch(`https://dry-atoll-97913.herokuapp.com/books/${book.id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(bookFetcher)
      .catch(console.log("error"))
  }


    return (
      
      <div className="book">
        <div className='book-info'>
          <h3>{book.title}</h3>
          <p>{book.genre}</p>
          <p>{book.description}</p>
          <button onClick={deleteBook}>Delete book</button>
        </div>
        <img src={book.coverURL} alt="book cover"/>
      </div>


    );
}

export default Book;