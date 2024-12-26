import React from 'react'

const Balance = ({ transactions }) => {

  // Calculate totals
  const totalIncome = transactions.filter((transaction) => transaction.type === 'income').reduce((total, transaction) => total + transaction.amount, 0);
  const totalExpense = transactions.filter((transaction) => transaction.type === 'expense').reduce((total, transaction) => total + transaction.amount, 0);
  const totalBalance = totalIncome - totalExpense;

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