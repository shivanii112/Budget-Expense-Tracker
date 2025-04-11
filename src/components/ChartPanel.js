import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from '../styles/ChartPanel.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function ChartPanel({ transactions }) {
  const income = transactions
    .filter(tx => tx.type === 'income')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expenses = transactions
    .filter(tx => tx.type === 'expense')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [income, expenses],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className={styles.chartContainer}>
      <h2>📊 Budget Overview</h2>
      <div className={styles.chartWrapper}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default ChartPanel;
