import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Login1() {
    let nevigate = useNavigate();

function logedin() {
    console.log("hiiiii")
    alert("hi")
    localStorage.setItem('login',true);
    nevigate("/")
}
    
useEffect(() => {
    let login = localStorage.getItem('login');
    if (login) {
        nevigate("/")
    }

  
})
   

  return (
    <>
<div className='container w-50 bg-warning'>
    {/* <form> */}
  <div className="form-group ">
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
  <button onClick={logedin} className="btn btn-primary mt-3">Login</button>

</div>
    </>
  )
}
