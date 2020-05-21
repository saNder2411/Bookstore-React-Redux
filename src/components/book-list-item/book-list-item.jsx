import React from 'react';
import './book-list-item.css';


const BookListItem = ({book, onAddedToCart}) => {

  const {title, author, price, coverImage} = book;

  return (
    <li className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <h6 className="book-title">
          {title}
        </h6>
        <div className="book-author">{author}</div>
        <div className="book-price">
          $
          {price}
        </div>
        <button
          onClick={onAddedToCart}
          className="btn btn-info add-to-cart"
          type="button">
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default BookListItem;
