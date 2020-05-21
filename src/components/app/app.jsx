import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './app.css';

import ShopHeaderContainer from '../../containers/shop-header-container/shop-header-container';
import HomePage from '../pages/home-page/home-page';
import CartPage from '../pages/cart-page/cart-page';


const App = () => (
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


export default App;
