import ActionTypes from "../action-types/action-types"

const booksRequested = () => ({type: ActionTypes.FETCH_BOOKS_REQUEST});

const booksLoaded = (books) => ({type: ActionTypes.FETCH_BOOKS_SUCCESS, payload: books});

const booksHasError = (error) => ({type: ActionTypes.FETCH_BOOKS_FAILURE, payload: error});

export const fetchBooks = (dispatch, getBooks) => () => {
  dispatch(booksRequested());
  getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksHasError(error)));
};

export const bookAddedToCart = (bookId) => ({type: ActionTypes.BOOK_ADDED_TO_CART, payload: bookId});

export const bookRemoveFromCart = (bookId) => ({type: ActionTypes.BOOK_REMOVE_FROM_CART, payload: bookId});

export const allBooksRemoveFromCart = (bookId) => ({type: ActionTypes.ALL_BOOKS_REMOVE_FROM_CART, payload: bookId});