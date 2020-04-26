import React, {useEffect} from 'react';
import './book-list.css';
import withBookstoreService from '../../hocs/withBookstoreService/withBookstoreService';
import {connect} from 'react-redux';
import {booksLoaded} from '../../store/actions/actions';
import {getBooks} from '../../store/reducers/selectors';

import BookListItem from '../book-list-item/book-list-item';
import {compose} from '../../utils/utils';


const BookList = ({getBooks, booksLoaded, books}) => {

  useEffect(() => {
    const books = getBooks();

    booksLoaded(books);
  }, [getBooks, booksLoaded]);


  const items = books.map((book) => (
    <li key={book.id}>
      <BookListItem book={book}/>
    </li>
  ))

  return (
    <ul>
      {items}
    </ul>
  );
};

const mapServiceMethodsToProps = ({getBooks}) => ({getBooks});

const mapStateToProps = (state) => ({books: getBooks(state)});

const mapDispatchToProps = {booksLoaded};

export default compose(
  withBookstoreService(mapServiceMethodsToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);