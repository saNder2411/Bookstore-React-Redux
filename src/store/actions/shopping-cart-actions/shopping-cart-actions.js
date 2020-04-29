import ActionTypes from '../../action-types/action-types';

export const bookAddedToCart = (bookId) => ({type: ActionTypes.BOOK_ADDED_TO_CART, payload: bookId});

export const bookRemoveFromCart = (bookId) => ({type: ActionTypes.BOOK_REMOVE_FROM_CART, payload: bookId});

export const allBooksRemoveFromCart = (bookId) => ({type: ActionTypes.ALL_BOOKS_REMOVE_FROM_CART, payload: bookId});