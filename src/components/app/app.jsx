import React from 'react';
import './app.css';

import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home-page/home-page';
import CartPage from '../pages/cart-page/cart-page';

const App = () => {

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;