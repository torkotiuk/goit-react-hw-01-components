import PropTypes from 'prop-types';
import styles from './TransactionsList.module.css';

const Transaction = ({ type, amount, currency, id }) => (
  <>
    <td>
      <span className={styles.transaction__column}>{type}</span>
    </td>
    <td>
      <span className={styles.transaction__amount}>{amount}</span>
    </td>
    <td>
      <span className={styles.transaction__currency}>{currency}</span>
    </td>
  </>
);

Transaction.defaultProps = {
  id: '99',
};

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transaction;
