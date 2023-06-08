import React, { useEffect, useState } from "react";
import axios from "axios";
const DepositForm = () => {
  const [amount1, setAmount] = useState("");
  const [id1, setId] = useState("");
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const getUserData = async () => {
    let userData = JSON.parse(localStorage.getItem("userInfo"));
    console.log("userData Vanne", userData);
    setId(userData.id)
    console.log("id ",id1);
  };
  useEffect(()=>{getUserData()},[])

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = {
      _id: id1,
      amount: amount1
    };
    await axios.post("http://localhost:8080/api/v1/users/addamount",{id1,amount1})
      .then((response) => {
        console.log(response);
      }).catch((err)=>console.log(err))
    
    setAmount(""); // Clear the input field after submission
  };


  return (
    <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto">
      <div className="flex  items-center border-b border-b-2 border-gray-500 py-2">
        <input
          type="number"
          placeholder="Amount to be deposited"
          value={amount1}
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

export default DepositForm;
