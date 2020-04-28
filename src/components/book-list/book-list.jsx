import React from 'react';
import BookListItem from '../book-list-item/book-list-item';
import withBooksData from '../../hocs/with-books-data/with-books-data';
import './book-list.css';


const BookList = ({books}) => {

  return (
    <ul className="book-list">
      {books.map((book) => <BookListItem key={book.id} book={book} />)}
    </ul>
  );
};

export default withBooksData(BookList);