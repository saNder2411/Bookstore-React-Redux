import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import withBookstoreService from '../../hocs/with-bookstore-service/with-bookstore-service';
import {fetchBooks} from '../../store/actions/books-actions';
import {getBooksData, getBooksLoading, getBooksError} from '../../store/reducers/books-selectors';

import Spinner from '../../components/spinner/spinner';
import ErrorIndicator from '../../components/error-indicator/error-indicator';
import BookList from '../../components/book-list/book-list';
import {compose} from '../../utils/utils';

const BookListContainer = ({fetchBooks, booksLoading, booksError, books}) => {

  useEffect(
    () => {
      fetchBooks();
    },
    [fetchBooks]
  );

  const hasData = !(booksLoading && booksError);
  const spinner = booksLoading ? <Spinner/> : null;
  const errorMessage = booksError ? <ErrorIndicator /> : null;
  const content = hasData ? <BookList books={books} /> : null;

  return spinner || errorMessage || content;
};

const mapServiceMethodsToProps = ({getBooks}) => ({getBooks});

const mapStateToProps = (state) => ({
  books: getBooksData(state),
  booksLoading: getBooksLoading(state),
  booksError: getBooksError(state),
});

const mapDispatchToProps = (dispatch, {getBooks}) => ({fetchBooks: fetchBooks(dispatch, getBooks)});

export default compose(
  withBookstoreService(mapServiceMethodsToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
