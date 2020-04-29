import React from 'react';
import BookListContainer from '../../../containers/book-list-container/book-list-container';
import Spinner from '../../spinner/spinner';
import './home-page.css';


const HomePage = () => {
  return (
    <div className="home-page">
      <React.Suspense fallback={<Spinner />}>
        <BookListContainer />
      </React.Suspense>
    </div>
  );
};

export default HomePage;
