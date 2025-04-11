import React from 'react';
import styles from '../styles/StatsPanel.module.css';

function StatsPanel({ transactions }) {
  const income = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expenses = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const balance = income - expenses;

  return (
    <div className={styles.panel}>
      <div className={styles.item}>
        <h4>Total Income</h4>
        <p className={styles.income}>+ ₹{income.toFixed(2)}</p>
      </div>
      <div className={styles.item}>
        <h4>Total Expenses</h4>
        <p className={styles.expense}>- ₹{expenses.toFixed(2)}</p>
      </div>
      <div className={styles.item}>
        <h4>Balance</h4>
        <p className={styles.balance}>₹{balance.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default StatsPanel;
