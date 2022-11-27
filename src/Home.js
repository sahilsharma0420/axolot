import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <div className="preloader">
        <div className="loader">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
  </div>*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Axo<span>lot</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="home" className="main-banner bg-gray">
        <div className="pattern-2"></div>
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row h-100 align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="main-banner-content">
                    <h1>Make your business more profitable</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut.
                    </p>
                    <a href="#about" className="btn btn-primary">
                      Get Started
                    </a>
                    <a
                      href="https://www.youtube.com/watch?v=vr0qNXmkUJ8"
                      className="btn btn-secondary popup-youtube"
                    >
                      <i className="icofont-ui-play"></i> Watch Our Video
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="banner-img wow animate__animated animate__fadeInUp">
                    <img src="assets/img/main-banner.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pattern"></div>
      </div>
      <section id="features" className="features-area bg-gray ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Features</span>
            <h3>Our Amazing Features</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <i className="icofont-hand-drag1"></i>
                <h3>Drag and drop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <i className="icofont-diamond"></i>
                <h3>Fully customizable</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <i className="icofont-responsive"></i>
                <h3>Fully responsive</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-features">
                <i className="icofont-rocket"></i>
                <h3>App integration</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>About Us</span>
            <h3>We provide best service for you customers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h3>
                  We are branding strategy service from <span>2001</span> for
                  our customers.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="pull-left">
                  <li>
                    <i className="icofont-ui-check"></i> Creative Design
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Retina Ready
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Responsive Design
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Creative Design
                  </li>
                </ul>
                <ul>
                  <li>
                    <i className="icofont-ui-check"></i> Modern Design
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Awesome Design
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Digital Marketing &
                    Branding
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Creative Design
                  </li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-img wow animate__animated animate__fadeInUp">
                <img src="assets/img/about.png" alt="about" />
              </div>
            </div>
          </div>
          <div className="row mt-100">
            <div className="col-lg-6 col-md-6">
              <div className="img wow animate__animated animate__fadeInUp">
                <img src="assets/img/1.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-text mb-0">
                <span>.01</span>
                <h3>Get Started with our software</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
                <ul>
                  <li>
                    <i className="icofont-ui-check"></i> Creative Design
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Retina Ready
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Modern Design
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Digital Marketing &
                    Branding
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-100">
            <div className="col-lg-6 col-md-6">
              <div className="about-text mt-0">
                <span>.02</span>
                <h3>Solve your problem faster</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
                <ul>
                  <li>
                    <i className="icofont-ui-check"></i> Creative Design
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Retina Ready
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Modern Design
                  </li>
                  <li>
                    <i className="icofont-ui-check"></i> Digital Marketing &
                    Branding
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="img wow animate__animated animate__fadeInUp">
                <img src="assets/img/2.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="row mt-100">
            <div className="col-lg-6 col-md-6">
              <div className="img wow animate__animated animate__fadeInUp">
                <img src="assets/img/3.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-text mb-0">
                <span>.03</span>
                <h3>All In one for all products</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="row mt-100">
            <div className="col-lg-6 col-md-6">
              <div className="about-text mt-0">
                <span>.04</span>
                <h3>We provide proffesional staff</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
                <blockquote className="blockquote">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="img wow animate__animated animate__fadeInUp">
                <img src="assets/img/4.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services-area bg-gray ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Services</span>
            <h3>We provide best service for you customers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="services-slides owl-carousel owl-theme">
              <div className="col-lg-12 col-md-12">
                <div className="single-services">
                  <i className="icofont-ruler-pencil"></i>
                  <h3>Software Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="single-services">
                  <i className="icofont-laptop-alt"></i>
                  <h3>Web Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="single-services">
                  <i className="icofont-brand-designfloat"></i>
                  <h3>Graphic Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="single-services">
                  <i className="icofont-ssl-security"></i>
                  <h3>Web Secuirity</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="single-services">
                  <i className="icofont-globe-alt"></i>
                  <h3>Online Marketing</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="single-services">
                  <i className="icofont-letterbox"></i>
                  <h3>Branding Design</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="single-services">
                  <i className="icofont-support"></i>
                  <h3>Helping Support</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="vision-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="tab">
                <ul className="tabs">
                  <li>
                    <a href="#">
                      <i className="icofont-laptop"></i>
                      <br />
                      User Experience
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-ruler-pencil-alt-2"></i>
                      <br />
                      Product Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-marker-alt-1"></i>
                      <br />
                      Digital Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-light-bulb"></i>
                      <br />
                      Branding
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-laptop-alt"></i>
                      <br />
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-infant-nipple"></i>
                      <br />
                      Marketing
                    </a>
                  </li>
                </ul>
                <div className="tab_content">
                  <div className="tabs_item">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>User Experience</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <img src="assets/img/1.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <img src="assets/img/2.png" alt="img" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mb-0">
                          <h3>Product Design</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>Digital Marketing</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <img src="assets/img/3.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <img src="assets/img/1.png" alt="img" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mb-0">
                          <h3>Branding</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>Development</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <img src="assets/img/2.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tabs_item">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img">
                          <img src="assets/img/4.png" alt="img" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content">
                          <h3>Marketing</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo.
                          </p>
                          <ul>
                            <li>
                              <i className="icofont-ui-check"></i> Creative
                              Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Retina Ready
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Modern Design
                            </li>
                            <li>
                              <i className="icofont-ui-check"></i> Digital
                              Marketing & Branding
                            </li>
                          </ul>
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
      <section className="funfacts-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="funFact">
                <i className="icofont-users-alt-5"></i>
                <h3>
                  <span className="count">500</span>K
                </h3>
                <p>Lovely Users</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="funFact">
                <i className="icofont-download"></i>
                <h3>
                  <span className="count">450</span>K
                </h3>
                <p>Download</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="funFact">
                <i className="icofont-search-document"></i>
                <h3>
                  <span className="count">1000</span>K
                </h3>
                <p>Resource</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="funFact">
                <i className="icofont-star-shape"></i>
                <h3>
                  <span className="count">5.00</span>
                </h3>
                <p>Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="join-img wow animate__animated animate__fadeInUp">
                <img src="assets/img/3.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="join-content">
                <h3>Overall 400k+ Our Clients Please Get Start Now</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo.
                </p>
                <a href="#" className="btn btn-primary">
                  Join Now
                </a>
                <a href="#" className="btn btn-secondary">
                  For Free trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-works-area bg-gray ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Works</span>
            <h3>How It Works</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-box with-line">
                <span>01.</span>
                <h3>Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-box with-line">
                <span>02.</span>
                <h3>Develop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-box">
                <span>03.</span>
                <h3>Product</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="team-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Team</span>
            <h3>Our Team Members</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="team-slides owl-carousel owl-theme">
              <div className="col-lg-12 col-md-12">
                <div className="our-team">
                  <div className="pic">
                    <img src="assets/img/team-1.jpg" alt="team" />
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">John Smith</h3>
                    <span className="post">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="our-team">
                  <div className="pic">
                    <img src="assets/img/team-2.jpg" alt="team" />
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">John Doe</h3>
                    <span className="post">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="our-team">
                  <div className="pic">
                    <img src="assets/img/team-3.jpg" alt="team" />
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">David Warner</h3>
                    <span className="post">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="our-team">
                  <div className="pic">
                    <img src="assets/img/team-4.jpg" alt="team" />
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">Steven Smith</h3>
                    <span className="post">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="our-team">
                  <div className="pic">
                    <img src="assets/img/team-5.jpg" alt="team" />
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="icofont-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icofont-behance"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="team-content">
                    <h3 className="title">David Walker</h3>
                    <span className="post">Web Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-area bg-gray ptb-100">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
        <div className="container">
          <div className="section-title">
            <span>Testimonials</span>
            <h3>What Our Users Say</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img wow animate__animated animate__fadeInUp">
                    <img src="assets/img/client-avatar1.jpg" alt="client" />
                  </div>
                  <div className="client-title">
                    <h4>John Smith</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img wow animate__animated animate__fadeInUp">
                    <img src="assets/img/client-avatar2.jpg" alt="client" />
                  </div>
                  <div className="client-title">
                    <h4>John Doe</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img wow animate__animated animate__fadeInUp">
                    <img src="assets/img/client-avatar3.jpg" alt="client" />
                  </div>
                  <div className="client-title">
                    <h4>Steven Smith</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img wow animate__animated animate__fadeInUp">
                    <img src="assets/img/client-avatar3.jpg" alt="client" />
                  </div>
                  <div className="client-title">
                    <h4>Steven</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img wow animate__animated animate__fadeInUp">
                    <img src="assets/img/client-avatar1.jpg" alt="client" />
                  </div>
                  <div className="client-title">
                    <h4>Walker</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="testimonials-item">
                <div className="client-info">
                  <div className="img wow animate__animated animate__fadeInUp">
                    <img src="assets/img/client-avatar2.jpg" alt="client" />
                  </div>
                  <div className="client-title">
                    <h4>David Warner</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </p>
                <i className="icofont-quote-left"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="faq-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span>FAQ</span>
            <h3>Frequently Asked Question</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="faq">
                <ul className="accordion">
                  <li className="accordion-item">
                    <a
                      className="accordion-title active"
                      href="javascript:void(0)"
                    >
                      How do permissions work in Google Play Instant?
                    </a>
                    <p className="accordion-content show">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li className="accordion-item">
                    <a className="accordion-title" href="javascript:void(0)">
                      Is Smart Lock required for instant apps?
                    </a>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li className="accordion-item">
                    <a className="accordion-title" href="javascript:void(0)">
                      Can I have multiple activities in a single feature?
                    </a>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li className="accordion-item">
                    <a className="accordion-title" href="javascript:void(0)">
                      Can I share resources between features?
                    </a>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li className="accordion-item">
                    <a className="accordion-title" href="javascript:void(0)">
                      Is multidex supported for instant apps?
                    </a>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                  <li className="accordion-item">
                    <a className="accordion-title" href="javascript:void(0)">
                      Can I share resources between features?
                    </a>
                    <p className="accordion-content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. incididunt ut labore et dolore magna aliqua.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="faq-img wow animate__animated animate__fadeInUp">
                <img src="assets/img/about.png" alt="faq" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing-area bg-gray ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Pricing</span>
            <h3>Our Packages</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="pricingTable">
                <h3 className="title">Basic Plan</h3>
                <div className="price-value">
                  $29.00<span className="month">/month</span>
                </div>
                <ul className="pricing-content">
                  <li>Unlimited Reservations</li>
                  <li>6 Clients and Products</li>
                  <li>Housekeeping Status</li>
                  <li>Invoicing and Payments</li>
                  <li>Data Security and Backups</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Select Plan
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="pricingTable">
                <h3 className="title">Advanced Plan</h3>
                <div className="price-value">
                  $49.00<span className="month">/month</span>
                </div>
                <ul className="pricing-content">
                  <li>Unlimited Reservations</li>
                  <li>6 Clients and Products</li>
                  <li>Housekeeping Status</li>
                  <li>Invoicing and Payments</li>
                  <li>Data Security and Backups</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Select Plan
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="pricingTable">
                <h3 className="title">Expert Plan</h3>
                <div className="price-value">
                  $69.00<span className="month">/month</span>
                </div>
                <ul className="pricing-content">
                  <li>Unlimited Reservations</li>
                  <li>6 Clients and Products</li>
                  <li>Housekeeping Status</li>
                  <li>Invoicing and Payments</li>
                  <li>Data Security and Backups</li>
                </ul>
                <a href="#" className="btn btn-primary">
                  Select Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="partner-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="partner-slides owl-carousel owl-theme">
              <div className="col-lg-12 col-md-12">
                <a href="#">
                  <img src="assets/img/partner-1.jpg" alt="partner" />
                </a>
              </div>
              <div className="col-lg-12 col-md-12">
                <a href="#">
                  <img src="assets/img/partner-2.jpg" alt="partner" />
                </a>
              </div>
              <div className="col-lg-12 col-md-12">
                <a href="#">
                  <img src="assets/img/partner-3.jpg" alt="partner" />
                </a>
              </div>
              <div className="col-lg-12 col-md-12">
                <a href="#">
                  <img src="assets/img/partner-4.jpg" alt="partner" />
                </a>
              </div>
              <div className="col-lg-12 col-md-12">
                <a href="#">
                  <img src="assets/img/partner-5.jpg" alt="partner" />
                </a>
              </div>
              <div className="col-lg-12 col-md-12">
                <a href="#">
                  <img src="assets/img/partner-6.jpg" alt="partner" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="subscribe-area ptb-100">
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="newsletter">
                <h4>
                  Subscribe for the latest <span>Axolot</span> Updates
                </h4>
                <form className="newsletter-form" data-bs-toggle="validator">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    name="EMAIL"
                    required
                    autocomplete="off"
                  />
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                  <div id="validator-newsletter" className="form-result"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="pattern"></div>
        <div className="pattern-2"></div>
      </section>
      <footer className="footer-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h4 className="logo">
                  <a href="#">
                    Axo<span>lot</span>
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut. sed do eiusmod tempor
                  incididunt ut, tempor incididunt ut.
                </p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Useful Links</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Features
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> About
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Services
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Blog
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Support</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Career
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Support
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Resource
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Strategy
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-double-right"></i> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer">
                <h3>Contact Info</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <ul className="contact-info">
                  <li>
                    <i className="icofont-google-map"></i> 2750 Quadra Street ,
                    Park Area, Victoria, Canada.
                  </li>
                  <li>
                    <i className="icofont-phone"></i> +(00) 01245687
                  </li>
                  <li>
                    <i className="icofont-envelope"></i>
                    <a
                      href="https://templates.envytheme.com/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="73000603031c010733120b1c1f1c075d101c1e"
                    >
                      [email&#160;protected]
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <p>
                  © Axolot is Proudly Owned by
                  <a href="https://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p>
              </div>
              <div className="col-lg-5 col-md-5">
                <ul>
                  <li>
                    <a href="#" className="icofont-facebook"></a>
                  </li>
                  <li>
                    <a href="#" className="icofont-twitter"></a>
                  </li>
                  <li>
                    <a href="#" className="icofont-instagram"></a>
                  </li>
                  <li>
                    <a href="#" className="icofont-linkedin"></a>
                  </li>
                  <li>
                    <a href="#" className="icofont-vimeo"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
