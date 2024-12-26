import React from 'react'

const TransactionList = ({ transactions, deleteTransaction }) => {
  return (
    <div className='transaction-list'>
        <h2>Transactions</h2>
        <ul>
            {transactions.map((transaction) => (
                <li key={transaction.id} className={transaction.type}>
                    <span>{transaction.type}</span>
                    <span>{transaction.amount.toFixed(2)}</span>
                    <span>{transaction.type === 'income' ? '+' : '-'}</span>
                    <button onClick = {() => deleteTransaction(transaction.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default TransactionList;