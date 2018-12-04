import React from "react";
import "../App.css";


const Book = ({book}) => {
    return (
      <div className="book">
        <div className='book-info'>
          <h3>{book.title}</h3>
          <p>{book.genre}</p>
          <p>{book.description}</p>
        </div>
        <img src={book.coverURL} alt="book cover"/>
      </div>
    );
}

export default Book;