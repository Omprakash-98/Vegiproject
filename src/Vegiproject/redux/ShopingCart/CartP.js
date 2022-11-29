import React, { useState } from 'react';
// import { faker } from '@faker-js/faker';
import './CartCss.css'

import Cartjsx from './CartCard';
import { useNavigate } from 'react-router-dom';
export default function CartP({ cart }) {
  const { id, img, title, price } = cart;

  const [count, setCount] = useState(0)
  // const [count2, setCount2] = useState(0)
  const navigate = useNavigate()
  return (
    <>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card maincard">
                <div className="card-body">

                  <div className="row">

                    <div className="col-lg-7 shadow ">
                      <h5 className="mb-3"><a href="#!" className="text-body" onClick={() => navigate('/')}>
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>Continue shopping</a></h5>
                      <hr />

                      <div className="carthead">
                        <div>
                          <h2 className="mb-1"><b>Shopping cart</b></h2>
                          <h6 className="mt-2">You have 4 items in your cart</h6>
                        </div>
                        <div>
                          <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                            className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                        </div>
                      </div>

                      {
                        cart.map((item) => {

                          return (

                            <div className="card  mb-3" >
                              <div className="card-body">
                                <div className="d-flex justify-content-between flex card1">
                                  <div className="d-flex flex-row align-items-center flex card2" >
                                    <div>
                                      <img
                                        src={item.img}
                                        className="img-fluid rounded-3" alt="Shopping item" style={{ width: "100px" }} />
                                    </div>
                                    <div className="title" >
                                      <h5>{item.title}</h5>
                                      <p className="small mb-0">{item.disc}</p>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center flex title">
                                    <div style={{ width: "70px",marginRight:'70px' }}>
                                      <span ><i class="fa fa-minus" aria-hidden="true"></i></span>
                                      <input type='number' />
                                      <span><i class="fa fa-plus" aria-hidden="true"></i></span>
                                    </div>
                                    <div style={{ width: "80px" }}>
                                      <h5 className="mb-0">{item.price}</h5>
                                    </div>
                                    <a href="#!" style={{ color: "#cecece" }}><i className="fas fa-trash-alt"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })
                      }

                    </div>
                    <div className="col-lg-5">

                      <div className="card bg-primary text-white rounded-3 formradius">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        className="img-fluid rounded-3"  style={{width: "45px"}} alt="Avatar"/> */}
                          </div>

                          <p className="small mb-2">Card type</p>
                          <a href="#!" type="submit" className="text-white">

                            <i className="fa fa-cc-mastercard" aria-hidden="true"></i></a>
                          <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-visa fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i
                            className="fab fa-cc-amex fa-2x me-2"></i></a>
                          <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                          <form className="formdetails">
                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                placeholder="Cardholder's Name" />
                              <label className="form-label" >Cardholder's Name</label>
                            </div>

                            <div className="form-outline form-white mb-4">
                              <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                placeholder="1234 5678 9012 3457" />
                              <label className="form-label" >Card Number</label>
                            </div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="text" id="typeExp" className="form-control form-control-lg"
                                    placeholder="MM/YYYY" size="7" />
                                  <label className="form-label" >Expiration</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input type="password" id="typeText" className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;" size="1" />
                                  <label className="form-label" >Cvv</label>
                                </div>
                              </div>
                            </div>

                          </form>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">$4798.00</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Shipping</p>
                            <p className="mb-2">$20.00</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">$4818.00</p>
                          </div>

                          <button type="button" className="btn btn-info btn-block btn-lg">
                            <div className="d-flex justify-content-between">
                              <span>$4818.00</span>
                              <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                            </div>
                          </button>

                        </div>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
