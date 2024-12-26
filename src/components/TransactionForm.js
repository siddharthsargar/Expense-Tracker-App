import React, {useState} from 'react'

const TransactionForm = ({ addTransaction, setError}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('General');
  const [transactionType, setTransactionType] = useState('income');


  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)){
        setError('Please enter a valid amount');
        return;
    }
  
    const newTransaction = {
        id: Date.now(),
        amount: parseFloat(amount),
        category,
        type: transactionType,
    };

    addTransaction(newTransaction);
    setAmount('');
    setCategory('General');
    setTransactionType('income');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className='form-group'>
            <input
            type='number'
            placeholder='Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            />
        </div>

        <div className='form-group'>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value={General}>General</option>
                <option value={Groceries}>Groceries</option>
                <option value={Rent}>Rent</option>
                <option value={Entertainement}>Entertainement</option>
                <option value={Salary}>Salary</option>
            </select>
        </div>

        <div className='form-group'>
            <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
        </div>

        <button type='Submit'>{transactionType === 'income'? 'Add Income' : 'Add Expense'}</button>

    </form>
  );
};

export default TransactionForm;