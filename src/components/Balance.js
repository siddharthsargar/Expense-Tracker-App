import React from 'react'

const Balance = ({ transactions }) => {
  // Calculate totals
//   console.log("transactions is", transactions)
  const totalIncome = transactions.filter((transaction) => transaction.type.toLowerCase() === 'income').reduce((total, transaction) => total + transaction.amount, 0);
//   console.log("totalIncome is", totalIncome)
  const totalExpense = transactions.filter((transaction) => transaction.type.toLowerCase() === 'expense').reduce((total, transaction) => total + transaction.amount, 0);
//   console.log("totalExpense is", totalExpense)
  const totalBalance = totalIncome - totalExpense;
//   console.log("totalBalance is", totalBalance)

  return (
    <div className='balance'>
        <h2>Balance</h2>
        <div className='balance-details'>
            <div className='income'>
                <span>Income:</span>
                <span>${totalIncome.toFixed(2)}</span>
            </div>

            <div className='expense'>
                <span>Expense:</span>
                <span>${totalExpense.toFixed(2)}</span>
            </div>

            <div className='net-balance'>
                <span>Net Balance:</span>
                <span>${totalBalance.toFixed(2)}</span>
            </div>
        </div>
    </div>
  );
};

export default Balance;