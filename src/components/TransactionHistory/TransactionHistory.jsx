import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.header}>
        <tr className={css.headerRow}>
          <th className={css.rowItem}>Type</th>
          <th className={css.rowItem}>Amount</th>
          <th className={css.rowItem}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.body}>
        {items.map(item => (
          <tr className={css.bodyRow} key={item.id}>
            <td className={css.dataItem}>{item.type}</td>
            <td className={css.dataItem}>{item.amount}</td>
            <td className={css.dataItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
