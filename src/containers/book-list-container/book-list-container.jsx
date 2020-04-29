import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import withBookstoreService from '../../hocs/with-bookstore-service/with-bookstore-service';
import {getBooksData, getBooksLoading, getBooksError} from '../../store/reducers/book-list-reducer/book-list-selectors';
import {fetchBooks} from '../../store/actions/book-list-actions/book-list-actions';
import {bookAddedToCart} from '../../store/actions/shopping-cart-actions/shopping-cart-actions';

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

const mapDispatchToProps = (dispatch, {getBooks}) => bindActionCreators({
  fetchBooks: fetchBooks(getBooks),
  onAddedToCart: bookAddedToCart,
}, dispatch);

export default compose(
  withBookstoreService(mapServiceMethodsToProps),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
