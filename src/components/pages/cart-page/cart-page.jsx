import React from 'react';
import ShoppingCartTableContainer from '../../../containers/shopping-cart-table-container/shopping-cart-table-container';
import './cart-page.css';

const CartPage = () => {

  return (
    <div className="cart-page">
      <ShoppingCartTableContainer />
    </div>
  );
};

export default CartPage;