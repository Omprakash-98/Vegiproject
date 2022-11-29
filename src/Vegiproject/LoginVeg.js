import React, { useEffect, useState } from 'react'
import './LoginvegCSS.css'
import imageavtar from '../Vegiproject/images/download.jpeg'
import { useNavigate } from 'react-router-dom'
export default function LoginVeg() {
    const [newuser, setNewser] = useState([]);

    const [data, setData] = useState({
        email: "",
        password: ""
    })
    // const [user, setUser] = useState()
    const navigate1 = useNavigate()
    let navigate = useNavigate()
    const navigateLogin = () => {
        navigate1('/signup')
    }
    let nevigate = useNavigate();

    useEffect(() => {
      

    },[newuser])
   

    function loginVegi(event) {
        const { name, value } = event.target
        setData((preval) => {
            return {
                ...preval,
                [name]: value,
            }
        })

    }
    let { email, password } = data;

    function logedin(e) {
        e.preventDefault()
        // alert("om")

        setNewser([...newuser, { email, password }])
       
        const user1 = JSON.parse(localStorage.getItem('Vegiuser'))

        // const [user] = user1
        
        // console.log(user);
{user1.map((item)=>{
     if(data.email===item.email&&data.password===item.password){
        alert('success')
        navigate("/")
     }else{
        
     }
    })}
        setData({
            email: "",
            password: "",
        })

    }

    return (
        <>

            <div className='divlogin'>
                <h2>Login Form</h2>
            </div>
            <form action='' className='container shadow' method="">
                <div className="imgcontainer">
                    <img src={imageavtar} alt="Avatar" className="avatar" />
                </div>

                <div className="container1">
                    <label><b>Username</b></label>
                    <input onChange={loginVegi} value={data.email} type="text" placeholder="Enter email" name="email" />

                    <label ><b>Password</b></label>
                    <input onChange={loginVegi} value={data.password} type="text" placeholder="Enter Password" name="password" />

                    <button type="submit" onClick={logedin}>Login</button>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>

                <div className="container2" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" className="cancelbtn btn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span><br></br>
                    <span className="psw"><button className="  btn signupbtn" onClick={navigateLogin}>Signup</button>
                    </span>
                </div>
            </form>

            {/* /////////////////////////// */}
            {/* <section className="vh-100 section">
                <div className="container  h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form className='form'>
                                <div className="signdetails ">
                                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                                    
                                </div>
                                <div className="form-outline ">
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>


                                <div className="form-outline mb-3">
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                                        className="link-danger text-warning">Register</a></p>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                <div
                    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 ">

                    <div className="container copyright mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>

                    <div>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#!" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#!" className="text-white">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>

                </div>
            </section>








 */}


        </>
    )
}
