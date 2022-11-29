import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar({count}) {
  const navigate = useNavigate()
  
  const navigatecart = useNavigate()
  const navigateCart = () => {
    navigatecart('/AddCart')
  }
  // const [count, setCount] = useState(0)
  
  return (
    <>

      <div className="top-area">

        <div className="header-area">

          <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
          
            <div className="top-search">
              <div className="container">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-search"></i></span>
                  <input type="text" className="form-control" placeholder="Search" />
                  <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="attr-nav">
                <ul>
                  <li className="search">
                    <a href="#"><span className="lnr lnr-heart"></span></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" onClick={navigateCart}>
                      <span className="lnr lnr-cart"></span>
                      <span className="badge badge-bg-1">{count}</span>
                    </a>
                  </li>
                  <li className="nav-setting">
                      <a href=""  onClick={()=>navigate('/login')}><i class="fa fa-power-off " aria-hidden="true"></i></a>
                    </li>
                </ul>
              </div>
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars" style={{
                    float: "left",
                    marginLeft: "16px"
                  }}></i>
                </button>

              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className=" scroll "><NavLink to='/' href="">home</NavLink></li>
                  <li className="scroll"><a href="#TodaysMarket">Todays Market</a></li>
                  <li className="scroll"><NavLink to='/contact' href="">contact</NavLink></li>

                </ul>

              </div>
            </div>
          </nav>

        </div>

        <div className="clearfix"></div>

      </div>


    </>
  )
}

export default NavBar