import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { NavLink,useNavigate } from "react-router-dom";
import './ContactVegCSS.css'
export default function ContactVeg() {
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
    const navigate = useNavigate()
    const navigateLogin=()=>{
     navigate('/login')
    }
    return (
        <>
{/* 
<header id="home" className="welcome-hero">
    <div className="top-area">
        
        <div className="header-area">

          <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
          <div className="loginbtn">
          <button className=" button btn" onClick={navigateLogin}>Login</button>
        </div>
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
                    <a href="#"><span className="lnr lnr-magnifier"></span></a>
                  </li>
                  <li className="nav-setting">
                    <a href="#"><span className="lnr lnr-cog"></span></a>
                  </li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" >
                      <span className="lnr lnr-cart"></span>
                      <span className="badge badge-bg-1">2</span>
                    </a>
                    <ul className="dropdown-menu cart-list s-cate">
                      <li className="single-cart-list">
                        <a href="#" className="photo"><img src="assets/images/arrivals1.png" className="cart-thumb" alt="image" /></a>
                        <div className="cart-list-txt">
                          <h6><a href="#">arm <br /> chair</a></h6>
                          <p>1 x - <span className="price">$180.00</span></p>
                        </div>
                        <div className="cart-close">
                          <span className="lnr lnr-cross"></span>
                        </div>
                      </li>
                      <li className="single-cart-list">
                        <a href="#" className="photo"><img src="assets/images/arrivals2.png" className="cart-thumb" alt="image" /></a>
                        <div className="cart-list-txt">
                          <h6><a href="#">single <br /> armchair</a></h6>
                          <p>1 x - <span className="price">$180.00</span></p>
                        </div>
                        <div className="cart-close">
                          <span className="lnr lnr-cross"></span>
                        </div>
                      </li>
                      <li className="single-cart-list">
                        <a href="#" className="photo"><img src="assets/images/arrivals3.png" className="cart-thumb" alt="image" /></a>
                        <div className="cart-list-txt">
                          <h6><a href="#">wooden arn <br /> chair</a></h6>
                          <p>1 x - <span className="price">$180.00</span></p>
                        </div>
                        <div className="cart-close">
                          <span className="lnr lnr-cross"></span>
                        </div>
                      </li>
                      <li className="total">
                        <span>Total: $0.00</span>
                        <button className="btn-cart pull-right" onclick="window.location.href='#'">view cart</button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars"></i>
                </button>

              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className=" scroll "><NavLink to='/' href="">home</NavLink></li>
                  <li className="scroll"><a href="">Todays Market</a></li>
                  <li className="scroll"><NavLink to='/contact' href="">contact</NavLink></li>
                 
                </ul>
               
              </div>
            </div>
          </nav>

        </div>
        
        <div className="clearfix"></div>

      </div>
    </header> */}



     {/* contact ------------------------ */}
        <section id="contact" className="contact mt-5 rounded shadow container ">
        <div className="container" data-aos="fade-up">

          <section class="jumbotron text-center ">
            <div class="containeri  infocontact shadow-sm">
              <h1 class="jumbotron-heading"> CONTACT US</h1>
              <p class="lead text-muted mt-2">Contact Page build with Bootstrap 4 !</p>
            </div>
          </section>

          <div className="row">

            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@example.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
                </div>

              </div>

            </div>
            
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" required />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" required />
                  </div>
                </div>
                <div className="form-group">
                  <label for="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" required />
                </div>
                <div className="form-group">
                  <label for="name">Message</label>
                  <textarea className="form-control" name="message" rows="10" required></textarea>
                </div>
                <div>
                    <Button onClick={formsubmit} className='btn btn-sm m-2'>Submit</Button>
                </div>
                
               
              </form>
            </div>

          </div>

        </div>
      </section>
          
           
        </>
    )
}
