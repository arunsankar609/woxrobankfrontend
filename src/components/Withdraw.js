import React, { useState } from 'react';

const Withdraw = () => {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Call your deposit function here with the amount
    // For example: depositAmount(amount);
    setAmount(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
      <div className="flex  items-center border-b border-b-2 border-gray-500 py-2">
       
        <input
          type="text"
          placeholder="Amount to be withdrawed"
          value={amount}
          onChange={handleAmountChange}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          required
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Deposit
        </button>
      </div>
    </form>
  );
};

export default Withdraw;
