import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

// import UserlistP from '../../../new components/Props1.js/UserlistP';
// import './ContactCss.css'
export default function ContactP() {
  const [newuser, setNewser] = useState([]);
  const [user, setUser] = useState({
    name: " ",
    email: "",
    number: "",
    massage: "",
  })
  const InputEvent = (event) => {
    const { name, value } = event.target
    setUser((preVal) => {

      return {
        ...preVal,
        [name]: value,
      }
    })
  }
  let { name, email, number, massage } = user

  const formsubmit = (event) => {
    event.preventDefault()
    // alert("om")

    setNewser([...newuser, { name, email, number, massage }])
    console.log(newuser);
    console.log(user);

    setUser({
      name: " ",
      email: "",
      number: "",
      massage: "",
    })
  }
  return (
    <>

    {/* ----------------------Contact Page ------------- */}
    
    <div className='col-7 mx-auto shadow-sm  rounded mt-lg-5 my-5 p-4 main_div'>
      {/* <div classNameName='col-8 mx-auto shadow main_sub_div p-4 m-5 rounded'> */}
      <form >
        <div className=" form-group">
          <label ><b>Name</b></label>
          <input type="text" className="shadow-sm form-control" id="exampleFormControlInput1" value={user.name} onChange={InputEvent} name="name" placeholder="Enter name Here..." />
        </div>
        <div className="form-group">
          <label ><b>Email address</b></label>
          <input type="email" className="form-control shadow-sm " id="exampleFormControlInput1" value={user.email} onChange={InputEvent} name="email" placeholder="Email@example.com" />
        </div>
        <div className="form-group">
          <label ><b>Phone Number</b></label>
          <input type="number" className="form-control shadow-sm " id="exampleFormControlInput1" value={user.number} onChange={InputEvent} name="number" placeholder="Enter number" />
        </div>


        <div className="form-group">
          <label ><b> Message</b></label>
          <textarea className="form-control shadow-sm " type="text" id="exampleFormControlTextarea1" rows="3" value={user.massage} onChange={InputEvent} name="massage" placeholder="Enter your massage"></textarea>
        </div>
        <div>
          <Button onClick={formsubmit} className='btn btn-sm m-2'>Submit</Button>
        </div>
      </form>
    </div>
    {/* ////////////////////////////////// */}
    <h1 className='container bg-success text-center '>User Data</h1>


<div className='container bg-primary h-75' style={{ display: "flex", justifyContent: "space-evenly " }}>
    <div className="container shadow-lg p-3 mb-5 bg-white rounded w-50 mt-3">
        <table className="table table-hover shadow  table-danger" >
            <thead>
                <tr style={{ color: "red", fontWeight: "bold" }}>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">massage</th>

                    

                </tr>
            </thead>

            {newuser.map((value, id) => {
                return (
                    <tbody className="table-primary" key={id}>
                        <tr> 
                        <td scope="row">{value.id}</td>
                        <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.number}</td>
                            <td>{value.massage}</td>
                        </tr>
                    </tbody>)
            })}



        </table>

    </div>

</div>
    {/* ////////////////////////////////////// */}

    </>
  )
}
