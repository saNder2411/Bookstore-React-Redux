import React from 'react';
import {Link} from 'react-router-dom';
import './shop-header.css';


const ShopHeader = ({numItems, total}) => {
  return (
    <header className="shop-header row">
      <h1>
        <Link to="/">
          <div className="logo text-dark">
            Bookstore
          </div>
        </Link>
      </h1>
      <Link to="/cart">
        <div className="shopping-cart" href="/">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
