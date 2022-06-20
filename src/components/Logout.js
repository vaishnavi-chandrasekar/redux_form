import React from 'react'
import "./Logout.css";
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice';

function Logout() {

  const user= useSelector(selectUser);

  const dispatch= useDispatch();
  const handleLogout=(e)=>{
    e.preventDefault()

    
    dispatch(logout())
  }
  return (
   <>
   <div className='Logout'>
     <h1>Welcome <span className='Name'>{user.name}</span></h1>
     <button type="submit" onClick={(e) =>handleLogout(e)}>Logout</button>
   </div>
   </>
  )
}

export default Logout
