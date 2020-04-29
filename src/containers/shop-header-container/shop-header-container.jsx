import React from 'react';
import ShopHeader from '../../components/shop-header/shop-header';
import {connect} from 'react-redux';
import {getCartItems, getOrderTotal} from '../../store/reducers/shopping-cart-reducer/shopping-cart-selectors';


const ShopHeaderContainer = ({cartItems, orderTotal}) => {

  return <ShopHeader numItems={cartItems.length} total={orderTotal}/>;
};

const mapStateToProps = (state) => ({
  cartItems: getCartItems(state),
  orderTotal: getOrderTotal(state),
});


export default connect(mapStateToProps)(ShopHeaderContainer);