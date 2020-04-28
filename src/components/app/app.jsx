import React from 'react';
import './app.css';

import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header/shop-header';
import HomePage from '../pages/home-page/home-page';
import CartPage from '../pages/cart-page/cart-page';

const App = () => {

  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={240} />
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
