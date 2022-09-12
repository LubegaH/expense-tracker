import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text: category,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Category</label>
          <input
            type='text'
            placeholder='Enter category...'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            placeholder='Enter amount...'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
