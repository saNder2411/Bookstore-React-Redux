import React, { useEffect } from 'react';
import './book-list.css';
import withBookstoreService from '../../hocs/withBookstoreService/withBookstoreService';
import { connect } from 'react-redux';
import { booksLoaded } from '../../store/actions/actions';
import { getBooks, getBooksLoading } from '../../store/reducers/selectors';

import BookListItem from '../book-list-item/book-list-item';
import Spinner from '../spinner/spinner';
import { compose } from '../../utils/utils';

const BookList = ({ getBooks, booksLoaded, books, booksLoading }) => {

  useEffect(
    () => {
      getBooks()
        .then((data) => booksLoaded(data));
    },
    [getBooks, booksLoaded]
  );

  if (booksLoading) {
    return <Spinner />;
  }

  return (
    <ul className="book-list">
      {books.map((book) => <BookListItem key={ book.id } book={ book } />)}
    </ul>
  );
};

const mapServiceMethodsToProps = ({ getBooks }) => ({ getBooks });

const mapStateToProps = (state) => ({
  books: getBooks(state),
  booksLoading: getBooksLoading(state),
});

const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(mapServiceMethodsToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
