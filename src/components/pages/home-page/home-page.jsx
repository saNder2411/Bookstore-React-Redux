import React from 'react';
import BookListContainer from '../../../containers/book-list-container/book-list-container';
import './home-page.css';


const HomePage = () => {
  return (
    <div className="home-page">
      <BookListContainer />
    </div>
  );
};

export default HomePage;
