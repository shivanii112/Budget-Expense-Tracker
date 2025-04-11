import React, { useEffect, useRef } from 'react';
import styles from '../styles/TransactionList.module.css';

function TransactionList({ transactions }) {
  const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [transactions]);

  return (
    <div className={styles.listContainer}>
      <h2>🧾 Transaction History</h2>
      <ul className={styles.transactionList}>
        {transactions.map((tx, index) => (
          <li key={index} className={styles.transactionItem}>
            <span>{tx.description}</span>
            <span
              className={
                tx.type === 'income'
                  ? styles.incomeAmount
                  : styles.expenseAmount
              }
            >
              ₹{tx.amount.toFixed(2)}
            </span>
          </li>
        ))}
        <div ref={endRef} />
      </ul>
    </div>
  );
}

export default TransactionList;
