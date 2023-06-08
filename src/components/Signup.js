import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
const SignupPage = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
   
    name: '',
    email: '',
    password: '',
  });
  const { name, email, Password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/users/signup',
        formData
      );
      console.log("bbbbbb",response);
      if(response.status===200){
        navigate('/')
      }else{
        console.log("err vanne");
      }
    } catch (err) {
      console.log("errr",err.response.request.status);
    }

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex justify-center items-center h-screen  bg-slate-200">
      <div className="bg-white shadow-md  px-8 pt-6 pb-8 mb-4 w-1/3 border rounded-lg border-gray-600">
       
        <form onSubmit={handleSubmit}>
          <div className=" rounded-lg p-2 m-2 bg-white">
          <h1 className="text-2xl text-center font-bold mb-6">Signup</h1>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name='name'
              type="text"
              value={name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name='email'
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name='Password'
              value={Password}
              onChange={handleChange}
              required
            />
          </div>
        
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign up
            </button>
          </div>
          </div>
          <div className='ml-4'>
            <h1>Already have account?<Link to="/"><span className='text-blue-700 font-medium cursor-pointer'>Please login</span></Link> </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
