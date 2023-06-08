import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    axios
      .post("http://localhost:8080/api/v1/users/login", { email, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("userInfo", JSON.stringify(response.data.user));
          localStorage.setItem("loggedIn",true);
          navigate("/home");
        }
        console.log(response);
      })
      .catch((err) => console.log(err));
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200 ">
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="border border-gray-600 rounded-lg p-2 m-2 bg-white">
          {" "}
          <div className="mb-4 ">
            <h1 className="font-bold text-2xl text-gray-800 mb-4">
              Log into your account
            </h1>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
          <div className=" m-2">
            <h1>
              Dont Have account yet?{" "}
              <Link to="/signup">
                <span className="text-blue-700 font-medium cursor-pointer">
                  Signup
                </span>{" "}
              </Link>{" "}
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
