import React from 'react';
import PropTypes from 'prop-types';
import Transaction from './Transaction';

const styles = {
  outline: '1px solid green',
  display: 'inline-block',
};

const TransactionHistory = ({ items }) => (
  <table class="transaction-history" style={styles}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <Transaction
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;

// dfsdfs
