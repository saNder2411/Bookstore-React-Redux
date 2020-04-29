import React from 'react';
import {connect} from 'react-redux';
import {getCartItems, getOrderTotal} from '../../store/reducers/shopping-cart-reducer/shopping-cart-selectors';
import {bookAddedToCart, bookRemoveFromCart, allBooksRemoveFromCart} from '../../store/actions/shopping-cart-actions/shopping-cart-actions';
import ShoppingCartTable from '../../components/shopping-cart-table/shopping-cart-table';


const ShoppingCartTableContainer = (props) => {

  return <ShoppingCartTable {...props} />;
};

const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
  orderTotal: getOrderTotal(state),
});

const mapDispatchToProps = {
  onDecrease: bookRemoveFromCart,
  onIncrease: bookAddedToCart,
  onDelete: allBooksRemoveFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer);
