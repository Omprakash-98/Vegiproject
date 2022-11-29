import React, { useState,useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function SignupVegi() {
const navigate2 = useNavigate()
  const [newuser1, setNewser] = useState([]);
  const [user, setUser] = useState({
    name: " ",
    email: "",
    number: "",
    password: "",
  })
  const SubmitEvent = (event) => {
    const { name, value } = event.target
    setUser((preVal) => {

      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  let { name, email, number, password } = user

  const formsubmit = (event) => {
    event.preventDefault()
    // alert("om")

    setNewser([...newuser1, { name, email, number, password }])
    

    setUser({
      name: " ",
      email: "",
      number: "",
      password: "",
    })
    
  }
  useEffect(() => {
    localStorage.setItem("Vegiuser", JSON.stringify(newuser1));
  }, [newuser1]);
  return (
    <>
 {/* contact ------------------------ */}
 <section id="contact" className="contact mt-5 rounded shadow container ">
        <div className="container" data-aos="fade-up">

          <section className="jumbotron text-center ">
            <div className="containeri  infocontact shadow-sm">
              <h1 className="jumbotron-heading" style={{color:"red"}} >New Register</h1>
              <p className="lead text-muted mt-2">register for get our srvices</p>
            </div>
          </section>

          <div className="row">

            
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label >Your Name</label>
                    <input  type="text"  className="form-control" id="name" required  
                    onChange={SubmitEvent} 
                     name='name'
                     value={user.name}/>
                  </div>
                  <div className="form-group col-md-6">
                    <label >Your Email</label>
                    <input  onChange={SubmitEvent} 
                     name='email'
                     value={user.email}  type="email" className="form-control" id="email" required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile</label>
                  <input  onChange={SubmitEvent} 
                     name='number'
                     value={user.number}  type="number" className="form-control"  id="subject" required />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input  onChange={SubmitEvent} 
                     name='password'
                     value={user.password} type="number" className="form-control"  id="subject" required />
                </div>
                <div>
                    <Button onClick={formsubmit}  className='btn btn-sm m-2'>Submit</Button>
                </div>
                
               
              </form>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
