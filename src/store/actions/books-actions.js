import ActionTypes from "../action-types/action-types"

const booksRequested = () => ({type: ActionTypes.FETCH_BOOKS_REQUEST});

const booksLoaded = (payload) => ({type: ActionTypes.FETCH_BOOKS_SUCCESS, payload});

const booksHasError = (payload) => ({type: ActionTypes.FETCH_BOOKS_FAILURE, payload});

export const fetchBooks = (dispatch, getBooks) => () => {
  dispatch(booksRequested());
  getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksHasError(error)));
};