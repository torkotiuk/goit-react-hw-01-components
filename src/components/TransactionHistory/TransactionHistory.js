import Transaction from './Transaction';
import styles from './TransactionsList.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.transactionHistory__head}>Type</th>
        <th className={styles.transactionHistory__head}>Amount</th>
        <th className={styles.transactionHistory__head}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr
          className={
            items.indexOf(item) % 2 === 0
              ? styles.transactionHistory__firstColor
              : styles.transactionHistory__secondColor
          }
          key={item.id}
        >
          <Transaction
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
