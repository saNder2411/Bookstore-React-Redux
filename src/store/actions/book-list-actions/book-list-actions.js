import ActionTypes from '../../action-types/action-types';

const booksRequested = () => ({type: ActionTypes.FETCH_BOOKS_REQUEST});

const booksLoaded = (books) => ({type: ActionTypes.FETCH_BOOKS_SUCCESS, payload: books});

const booksHasError = (error) => ({type: ActionTypes.FETCH_BOOKS_FAILURE, payload: error});

export const fetchBooksOld = (dispatch, getBooks) => () => {
  dispatch(booksRequested());
  getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksHasError(error)));
};

export const fetchBooks = (getBooks) => () => (dispatch) => {
  dispatch(booksRequested());
  getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksHasError(error)));
};