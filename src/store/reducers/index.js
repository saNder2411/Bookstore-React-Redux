import ActionTypes from '../action-types/action-types';

const initialState = {
  books: [],
  booksLoading: true,
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case ActionTypes.BOOKS_LOADED:
      return {
        ...state,
        books: action.payload,
        booksLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;