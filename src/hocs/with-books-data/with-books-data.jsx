import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import withBookstoreService from '../../hocs/with-bookstore-service/with-bookstore-service';
import {fetchBooks} from '../../store/actions/books-actions';
import {getBooks, getBooksLoading, getBooksError} from '../../store/reducers/books-selectors';

import Spinner from '../../components/spinner/spinner';
import ErrorIndicator from '../../components/error-indicator/error-indicator';
import {compose} from '../../utils/utils';

const withBooksData = (Component) => {
  const WithBooksData = ({fetchBooks, booksLoading, booksError, books}) => {

    useEffect(
      () => {
        fetchBooks();
      },
      [fetchBooks]
    );
  
    if (booksLoading) {
      return <Spinner />;
    }

    if (booksError) {
      return <ErrorIndicator />
    }
  
    return <Component books={books} />;
  };
  
  const mapServiceMethodsToProps = ({getBooks}) => ({getBooks});
  
  const mapStateToProps = (state) => ({
    books: getBooks(state),
    booksLoading: getBooksLoading(state),
    booksError: getBooksError(state),
  });
  
  const mapDispatchToProps = (dispatch, {getBooks}) => ({fetchBooks: fetchBooks(dispatch, getBooks)});
  
  return compose(
    withBookstoreService(mapServiceMethodsToProps),
    connect(mapStateToProps, mapDispatchToProps)
  )(WithBooksData);
};

export default withBooksData;
