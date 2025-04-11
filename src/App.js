import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import StatsPanel from './components/StatsPanel';
import TransactionList from './components/TransactionList';
import ChartPanel from './components/ChartPanel';

import { loadFromStorage, saveToStorage } from './localStorage';

import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const stored = loadFromStorage();
    if (stored) setTransactions(stored);
  }, []);

  useEffect(() => {
    saveToStorage(transactions);
  }, [transactions]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <h1>💸 Budget & Expense Tracker</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <StatsPanel transactions={transactions} />
      <TransactionList transactions={transactions} />
      <ChartPanel transactions={transactions} />
    </div>
  );
}

export default App;
