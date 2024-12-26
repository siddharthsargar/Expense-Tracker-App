import React, { useState, useEffect} from 'react'
import './App.css'
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';


const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');


  // Load transactions from LocalStorage
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions)
    }
  }, []);


  // Save transactions to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions]);


  // Add new transaction
  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
  };


  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };


  return (
    <div className='expense-tracker'>
      <h1>Expense Tracker</h1>

      {/* Error Message */}
      {error && <div className='error'>{error}</div>}

      {/* Transaction Form */}
      <TransactionForm addTransaction={addTransaction} setError={setError}/>

      {/* Balance */}
      <Balance transactions={transactions}/>

      {/* Transaction List */}
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction}/>
    </div>
  );
};

export default App;