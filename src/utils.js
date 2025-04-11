export const calculateTotals = (transactions) => {
    let income = 0;
    let expense = 0;
  
    transactions.forEach(({ amount, type }) => {
      if (type === 'Income') {
        income += Number(amount);
      } else if (type === 'Expense') {
        expense += Number(amount);
      }
    });
  
    const balance = income - expense;
  
    return {
      income,
      expense,
      balance,
    };
  };
  