import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ShopHeaderContainer from '../../containers/shop-header-container/shop-header-container';
import HomePage from '../pages/home-page/home-page';
import CartPage from '../pages/cart-page/cart-page';

import './app.css';


const App = () => {

  return (
    <main role="main" className="app">
      <ShopHeaderContainer />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </main>
  );
};

export default App;
