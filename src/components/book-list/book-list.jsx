import React from 'react';
import './book-list.css';
import BookListItem from '../book-list-item/book-list-item';


const BookList = ({books, onAddedToCart}) => {

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookListItem
          key={book.id}
          book={book}
          onAddedToCart={() => onAddedToCart(book.id)} />
      ))}
    </ul>
  );
};

export default BookList;
