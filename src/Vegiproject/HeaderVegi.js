import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HeaderVegi() {
  return (
    <>
      <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
        <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
          <li className=" scroll "><NavLink to='/' href="">home</NavLink></li>
          <li className="scroll"><a href="">Todays Market</a></li>
          <li className="scroll"><NavLink to='/contact' href="">contact</NavLink></li>
          <li className="scroll"><NavLink to='/login' href="">Login</NavLink></li>

        </ul>
      </div>
    </>
  )
}
