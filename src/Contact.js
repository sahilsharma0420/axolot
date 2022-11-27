import React from "react";

import { NavLink } from "react-router-dom";
function Contact() {
  return (
    <div>
      {/*Start Preloader */}
     {/* <div className="preloader">
        <div className="loader">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
  </div>*/}
      {/*End Preloader */}

      {/*Start Navbar Area */}
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
                <NavLink className=" nav-link"  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link"  to="/">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link"  to="/">Features</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link"  to="/">Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link"  to="/">Team</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link"  to="/">FAQ</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link"  to="/">Pricing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link"  to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*End Navbar Area */}

      {/*Start Page Title Area */}
      <div className="page-title">
        <div className="pattern-2"></div>
        <div className="bg-top"></div>
        <div className="bg-bottom"></div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h3>Contact Axolot</h3>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="icofont-thin-right"></i>
                  </li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Page Title Area */}

      {/*Start Contact Area */}
      <section className="contact-area bg-gray ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="contact-box">
                <div className="icon">
                  <i className="icofont-phone"></i>
                </div>

                <div className="content">
                  <h4>Phone / Fax</h4>
                  <p>
                    <a href="#">(+021) 245522455</a>
                  </p>
                  <p>
                    <a href="#">(+000) 245522455</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="contact-box">
                <div className="icon">
                  <i className="icofont-envelope"></i>
                </div>

                <div className="content">
                  <h4>E-mail</h4>
                  <p>
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="670e09010827261f080b08134904080a"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      <span
                        className="__cf_email__"
                        data-cfemail="42313732322d303602033a2d2e2d366c212d2f"
                      >
                        [email&#160;protected]
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="contact-box">
                <div className="icon">
                  <i className="icofont-google-map"></i>
                </div>

                <div className="content">
                  <h4>Location</h4>
                  <p>
                    2750 Quadra Street , Park Area,{" "}
                    <span>Victoria, Canada.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.8158792277713!2d-123.36243578415748!3d48.44087343796659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7381102ff519%3A0xc03e5586418eb3f2!2s2750%20Quadra%20St%2C%20Victoria%2C%20BC%20V8T%204E8%2C%20Canada!5e0!3m2!1sen!2sbd!4v1620711829369!5m2!1sen!2sbd"></iframe>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="contact-text">
                <h3>Get in Touch</h3>
                <p>
                  Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Etiam tempus magna vel turpis pharetra
                  dictum.
                </p>
                <p>
                  Sed blandit tempus purus, sed sodales leo rutrum vel. Nam
                  vulputate ipsum ac est congue, eget commodo magna lobortis.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <form id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        required
                        data-error="Please enter your name"
                        placeholder="Name"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        required
                        data-error="Please enter your email"
                        placeholder="Email"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="msg_subject"
                        id="msg_subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                        data-error="Please enter your subject"
                      />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        cols="30"
                        rows="4"
                        required
                        data-error="Write your message"
                        placeholder="Your Message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                    <div className="clearfix"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*Start Contact Area */}

      {/*Start Subscribe Area*/}
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
      {/*End Subscribe Area*/}

      {/*Start Footer Area */}
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
                      data-cfemail="2f5c5a5f5f405d5b6f4e574043405b014c4042"
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

export default Contact;
