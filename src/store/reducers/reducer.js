import updateBookList from './book-list/book-list';
import updateShoppingCart from './shopping-cart/shopping-cart';

const initialState = {
  bookList: {
    books: [],
    booksLoading: true,
    booksError: null,
  },
  shoppingCart: {
    cartItems: [],
    orderTotal: 0,
  },
};

const reducer = (state = initialState, action) => ({
  bookList: updateBookList(state, action),
  shoppingCart: updateShoppingCart(state, action),
});

export default reducer;