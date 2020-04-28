import ActionTypes from '../action-types/action-types';

const initialState = {
  books: [],
  booksLoading: true,
  booksError: null,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.FETCH_BOOKS_REQUEST:
      return {
        books: [],
        booksLoading: true,
        booksError: null,
      };

    case ActionTypes.FETCH_BOOKS_SUCCESS:
      return {
        books: action.payload,
        booksLoading: false,
        booksError: null,
      };

    case ActionTypes.FETCH_BOOKS_FAILURE:
      return {
        books: [],
        booksLoading: false,
        booksError: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;