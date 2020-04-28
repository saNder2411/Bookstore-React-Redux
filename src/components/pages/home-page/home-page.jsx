import React from 'react';
import BookListContainer from '../../../containers/book-list-container/book-list-container';
import ShoppingCartTable from '../../shopping-cart-table/shopping-cart-table';
import Spinner from '../../spinner/spinner';
import './home-page.css';


const HomePage = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<Spinner />}>
        <BookListContainer />
      </React.Suspense>
      <ShoppingCartTable />
    </React.Fragment>
  );
};

export default HomePage;
