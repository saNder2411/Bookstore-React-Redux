import React from 'react';
import './shopping-cart-table.css';


const ShoppingCartTable = ({cartItems, orderTotal, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, i) => {
    const {id, title, count, total} = item;

    return (
      <tr className="table-active" key={id}>
        <td>{++i}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Book</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map(renderRow)}
        </tbody>
      </table>
      <div className="total">Total: ${orderTotal}</div>
    </div>
  );
};

export default ShoppingCartTable;
