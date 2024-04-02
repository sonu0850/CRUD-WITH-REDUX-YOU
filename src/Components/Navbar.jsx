import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
  // const allpost = useSelector((state)=>state.MockSlice.users.length)
 


  return (
<div className="navbar  flex justify-between px-5 items-center py-3 text-black ">
  <NavLink to={'/'}><div className="logo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQxw1cTuPpfXg5Emnx4tD2bcY_ZyUMlejFmtPfN-YZeET7J4t6jx9VlCiWRPfeU4qR2nA&usqp=CAU" alt=""  width={130}/></div></NavLink>
 <div className="content flex gap-3">
    <NavLink to='/'><h2>Home</h2></NavLink>
    <NavLink to='/Read'><h2>All Data </h2></NavLink>
    <NavLink to='/contact'><h2>Contact Us</h2></NavLink>
  

  </div>
  <div className="btn flex gap-3 items-center">
 
 
 
          {/* <NavLink to="/Signup">  <button className='p-1 rounded-xl text-white  bg-black'>Sign Up</button></NavLink> */}
  </div>
</div>
   
    
  )
}

export default Navbar
