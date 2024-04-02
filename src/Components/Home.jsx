import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Create } from '../Store/MockApi/MockSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [users, setusers] = useState({})
    console.log("user",users);
   
   
    const handlechange =(e)=>{
        setusers({...users ,[e.target.name]: e.target.value})

    }

    const handlesubmit =(e)=>{
        console.log("hki");
        e.preventDefault()
        dispatch (Create(users))
        navigate('/Read')
       
    }
  return (
    <div className="w-full max-w-xs mx-auto">
        <h2 className='text-center'>SUBMIT YOUR FORM</h2>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handlesubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          name='name'
          onChange={handlechange}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="Email"
          type="Email"
          placeholder="Email"
          name='email'
          onChange={handlechange}
        />
       
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="Age"
        >
          Age
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="Age"
          type="Number"
          placeholder="Age"
          name='age'
          onChange={handlechange}
        />
       
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="Submit"
        >
         Submit
        </button>
        
      </div>
    </form>
    <p className="text-center text-gray-500 text-xs">
      ©2020 Acme Corp. All rights reserved.
    </p>
  </div>
  
  )
}

export default Home
