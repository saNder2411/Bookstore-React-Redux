import ActionTypes from '../../action-types/action-types';


const updateBookList = (state, action) => {

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
      return state.bookList;
  }
};

export default updateBookList;
