import React, { useState } from 'react';

const AddTransaction = () => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <form>
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
