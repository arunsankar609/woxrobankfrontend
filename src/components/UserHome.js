import axios from "axios";
import React, { useEffect, useState } from "react";

const UserHome = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
const [amount,setAmount]=useState("")
  const getUserData = async () => {
    let userData = JSON.parse(localStorage.getItem("userInfo"));
    console.log("userData Vanne", userData);
    setuserName(userData.name);
    setEmail(userData.email);
    setId(userData.id);
  };
  const getAmount =async() => {
    console.log(id);
  await axios.get(`http://localhost:8080/api/v1/users/getAmount/${id}`).then((response) => {
        console.log(response);
        setAmount(response.data.amount)
      }).catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {
    getAmount();
  }, [id]);
  return (
    <div className="w-full flex justify-center">
      <div className=" w-2/4 shadow-2xl rounded-2xl p-2 m-2">
        <h1 className="text-2xl text-left  border-b-gray-300 mx-3">
          Welcome {userName}
        </h1>
        <div className="text-left p-2 m-2">
          <h1 className="border border-gray-300  p-2 m-2 rounded-md">
            Your Id: {email}
          </h1>
          <h1 className="border border-gray-300  p-2 m-2 rounded-md ">
            Your Balance: {amount} INR
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
