import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/TransactionForm.module.css';

function TransactionForm({ onAddTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('income');
  const formRef = useRef(null);
  const amountRef = useRef(null);

  useEffect(() => {
    amountRef.current.focus();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    if (!amount || isNaN(amount) || !description) {
      formRef.current.classList.add(styles.shake);
      setTimeout(() => {
        formRef.current.classList.remove(styles.shake);
      }, 500);
      return;
    }

    const newTransaction = {
      amount: parseFloat(amount),
      description,
      type,
    };

    onAddTransaction(newTransaction);
    setAmount('');
    setDescription('');
    setType('income');
    amountRef.current.focus();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} ref={formRef}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        ref={amountRef}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
