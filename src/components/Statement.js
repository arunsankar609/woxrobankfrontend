import React from 'react';

const Statement = () => {
  const statementData = [
    {
      datetime: '2023-06-01 10:30 AM',
      amount: 1000,
      type: 'Deposit',
      details: 'Received payment',
    },
    {
      datetime: '2023-06-02 03:45 PM',
      amount: -500,
      type: 'Withdrawal',
      details: 'Paid for groceries',
    },
    // Add more statement data as needed
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Account Statement</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Datetime</th>
            <th className="py-2 px-4 border">Amount</th>
            <th className="py-2 px-4 border">Type</th>
            <th className="py-2 px-4 border">Details</th>
          </tr>
        </thead>
        <tbody>
          {statementData.map((data, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border">{data.datetime}</td>
              <td className={`py-2 px-4 border ${data.amount >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {data.amount >= 0 ? `+Rs ${data.amount}` : `-Rs ${Math.abs(data.amount)}`}
              </td>
              <td className="py-2 px-4 border">{data.type}</td>
              <td className="py-2 px-4 border">{data.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statement;
