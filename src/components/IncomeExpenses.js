import React from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>UGX 0</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>UGX 0</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
