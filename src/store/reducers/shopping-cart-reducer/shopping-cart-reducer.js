import ActionTypes from '../../action-types/action-types';


const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ];
  }

  if(idx === -1) {
    return [item, ...cartItems];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ];
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + book.price * quantity,
  };
};

const updateOrderTotal = (cartItems) => {
  let countTotal = 0;
  cartItems.forEach(({total}) => {
    countTotal += total;
  });

  return countTotal;
};

const updateOrder = (state, bookId, quantity) => {
  const {bookList: {books}, shoppingCart: {cartItems}} = state;
  const book = books.find(({id}) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);
  const newOrderTotal = updateOrderTotal(newCartItems)

  return {
    cartItems: newCartItems,
    orderTotal: newOrderTotal,
  };
};

const updateShoppingCart = (state, action) => {
  switch (action.type) {
    case ActionTypes.BOOK_ADDED_TO_CART:
      return updateOrder(state, action.payload, 1);

    case ActionTypes.BOOK_REMOVE_FROM_CART:
      return updateOrder(state, action.payload, -1);

    case ActionTypes.ALL_BOOKS_REMOVE_FROM_CART:
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;