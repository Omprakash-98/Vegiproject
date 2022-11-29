import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import slider1 from '../Vegiproject/images/vegibige4.jpg'
import slider2 from '../Vegiproject/images/palak1.jpg'
import slider3 from '../Vegiproject/images/gajar.jpg'
// import image1 from '../Vegiproject/images/vegi2.jpg'
// import image2 from '../Vegiproject/images/vegibig1.jpeg'
// import image3 from '../Vegiproject/images/vegibig3.jpeg'
// import image4 from '../Vegiproject/images/tomato1.jpeg'
// import image5 from '../Vegiproject/images/potato1.jpeg'
// import image6 from '../Vegiproject/images/gobhi1.jpeg'
// import image7 from '../Vegiproject/images/onion1.jpeg'
import AppVegiCard from "./AppVegiCard";
import VegiData from "./VegiData";

function AppVegi({ addtoCart, count }) {
  const navigate = useNavigate()
  const navigateLogin = () => {
    navigate('/login')
  }
  const navigatecart = useNavigate()
  const navigateCart = () => {
    navigatecart('/AddCart')
  }
  const [search, setSearch] = useState()
  console.log(count);

  function newdata(val, id) {
    console.log('home', val.img);
    return (
      <AppVegiCard
        key={val.key}
        index={id}
        img={val.img}
        title={val.title}
        price={val.price}
        addtoCart={addtoCart}
        items={val}
      />
    )
  }



  return (
    <div className="App">


      <header id="home" className="welcome-hero">

        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">

          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to="0" className="active"><span className="small-circle"></span></li>
            <li data-target="#header-carousel" data-slide-to="1"><span className="small-circle"></span></li>
            <li data-target="#header-carousel" data-slide-to="2"><span className="small-circle"></span></li>
          </ol>
          <div className="carousel-inner" role="listbox">

            <div className="item active">
              <div className="single-slide-item slide1">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>cloth covered accent chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 399.00
                                <del>$ 499.00</del>
                              </p>
                            </div>
                            <button onClick={addtoCart} className="btn-cart welcome-add-cart" >
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button className="btn-cart welcome-add-cart welcome-more-info" >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img src={slider2} alt="slider image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-slide-item slide2">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>mapple wood accent chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 199.00
                                <del>$ 299.00</del>
                              </p>
                            </div>
                            <button className="btn-cart welcome-add-cart" >
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button className="btn-cart welcome-add-cart welcome-more-info" >
                              more info
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img src={slider1} alt="slider image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-slide-item slide3">
                <div className="container">
                  <div className="welcome-hero-content">
                    <div className="row">
                      <div className="col-sm-7">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-txt">
                            <h4>great design collection</h4>
                            <h2>valvet accent arm chair</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuiana smod tempor  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                            </p>
                            <div className="packages-price">
                              <p>
                                $ 299.00
                                <del>$ 399.00</del>
                              </p>
                            </div>
                            <button className="btn-cart welcome-add-cart">
                              <span className="lnr lnr-plus-circle"></span>
                              add <span>to</span> cart
                            </button>
                            <button className="btn-cart welcome-add-cart welcome-more-info">
                              more info
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="single-welcome-hero">
                          <div className="welcome-hero-img">
                            <img src={slider3} alt="slider image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>


      </header>

      {/* New Arrivals */}

      <section id="new-arrivals" className="new-arrivals">
        <div className="container">
          <div className="section-header bg-dark">
            <h2>Todays Market</h2>
          </div>
          <div className="new-arrivals-content">
            <div className="row" >
              {
                VegiData.map(newdata)
              }
            </div>
          </div>
        </div>
      </section>
      {/* <section id="sofa-collection">
        <div className="owl-carousel owl-theme" id="collection-carousel">
          <div className="sofa-collection collectionbg1">
            <div className="container">
              <div className="sofa-collection-txt">
                <h2>unlimited sofa collection</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="sofa-collection-price">
                  <h4>strting from <span>$ 199</span></h4>
                </div>
                <button className="btn-cart welcome-add-cart sofa-collection-btn">
                  view more
                </button>
              </div>
            </div>
          </div>
          <div className="sofa-collection collectionbg2">
            <div className="container">
              <div className="sofa-collection-txt">
                <h2>unlimited dainning table collection</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="sofa-collection-price">
                  <h4>strting from <span>$ 299</span></h4>
                </div>
                <button className="btn-cart welcome-add-cart sofa-collection-btn" >
                  view more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <footer id="footer" className="footer">
        <div className="container">
          <div className="hm-footer-copyright text-center">
            <div className="footer-social">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-pinterest"></i></a>
              <a href="#"><i className="fa fa-behance"></i></a>
            </div>
            <p>
              &copy;copyright. designed and developed by <a href="https://www.therichpost.com/">Jassa</a>
            </p>
          </div>
        </div>
        <div id="scroll-Top">
          <div className="return-to-top">
            <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
          </div>

        </div>

      </footer>

    </div>
  );
}
export default AppVegi;