import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import withBookstoreService from '../../hocs/with-bookstore-service/with-bookstore-service';
import {getBooksData, getBooksLoading, getBooksError} from '../../store/reducers/book-list/book-list-selectors';
import {fetchBooks, bookAddedToCart} from '../../store/actions/books-actions';

import Spinner from '../../components/spinner/spinner';
import ErrorIndicator from '../../components/error-indicator/error-indicator';
import BookList from '../../components/book-list/book-list';
import {compose} from '../../utils/utils';

const BookListContainer = ({fetchBooks, onAddedToCart, booksLoading, booksError, books}) => {

  useEffect(
    () => {
      fetchBooks();
    },
    [fetchBooks]
  );

  const hasData = !(booksLoading && booksError);
  const spinner = booksLoading ? <Spinner/> : null;
  const errorMessage = booksError ? <ErrorIndicator /> : null;
  const content = hasData ? <BookList books={books} onAddedToCart={onAddedToCart} /> : null;

  return spinner || errorMessage || content;
};

const mapServiceMethodsToProps = ({getBooks}) => ({getBooks});

const mapStateToProps = (state) => ({
  books: getBooksData(state),
  booksLoading: getBooksLoading(state),
  booksError: getBooksError(state),
});

const mapDispatchToProps = (dispatch, {getBooks}) => ({
  fetchBooks: fetchBooks(dispatch, getBooks),
  onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
});

export default compose(
  withBookstoreService(mapServiceMethodsToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
