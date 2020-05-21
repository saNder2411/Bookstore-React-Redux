import React from 'react';
import './home-page.css';
import BookListContainer from '../../../containers/book-list-container/book-list-container';


const HomePage = () => (
  <div className="home-page">
    <BookListContainer />
  </div>
);

export default HomePage;
