import updateBookList from './book-list-reducer/book-list-reducer';
import updateShoppingCart from './shopping-cart-reducer/shopping-cart-reducer';


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
