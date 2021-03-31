import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import "./XypoStyle.scss"
import logo from "../../assets/images/logo.png"
import feature_1 from "../../assets/images/aa.png"
import feature_2 from "../../assets/images/pic-2.png"
import feature_3 from "../../assets/images/pic-3.png"
import courses from "../../assets/images/course.png"
import about from "../../assets/images/about.png"
import offer from "../../assets/images/offer.png"
import contact from "../../assets/images/contact.png"

export default class Xypo extends Component {
    render() {
        return (
            <div>
                {/* header */}
                <section className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="header-box img image-size img-responsive">
                                    <div className="header-text">
                                        <h1>
                                            The purpose is to <br />
                                            teach , bring learning <br /> to people
                                        </h1>
                                        <div className="squire"></div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa adipisci quia possimus vero nam facere deleniti earum, rem neque error obcaecati mollitia nemo eligendi exercitationem, iure eum cumque at iste.
                                        </p>
                                        <button type="button" className="btn btn-lg btn-outline button" >Read More</button>
                                        <div className="line">
                                            <div className="squire"></div>
                                            <div className="line-1"></div>
                                            <div className="line-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About */}
                <section className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ">
                                {/* <div className="about-image image-size img-fluid"></div> */}
                                <img src={about} className="about-image image-size" alt="about"/>
                            </div>
                            <div className="col-md-6">
                                <div className="about-text">
                                    <h2>About Us</h2>
                                    <div className="squire"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sed quo. Sequi expedita, eveniet amet maxime voluptas nulla sit cupiditate obcaecati sint velit tenetur adipisci, explicabo voluptatum dignissimos error Quod.
                                    </p>
                                    <div className="line">
                                        <div className="squire"></div>
                                        <div className="line-1"></div>
                                        <div className="line-2"></div>
                                    </div>
                                    <h2>"Learning is not attained by chance it must be sought for with ardor and attended to with diligence"</h2>
                                    <p>---Abigail Adams</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Feature */}
                <section className="feature">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature-text">
                                    <img className="image-size" src={feature_1} alt="" />
                                    <h4>Learn Anywhere</h4>
                                    <p>Switch between your computer , tablet or mobile device</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-text">
                                    <img className="image-size" src={feature_2} alt="" />
                                    <h4>Learn Anywhere</h4>
                                    <p>Switch between your computer , tablet or mobile device</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature-text">
                                    <img className="image-size" src={feature_3} alt="" />
                                    <h4>Learn Anywhere</h4>
                                    <p>Switch between your computer , tablet or mobile device</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature-btn">
                        <div className="line">
                            <div className="squire"></div>
                            <div className="line-1"></div>
                            <div className="line-2"></div>
                        </div>
                        <button className="btn btn-lg btn-outline button">Start Free Trial</button>
                    </div>
                </section>
                {/* Courses */}
                <section className="courses">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="courses-text">
                                    <h2>Browse our top <br />
                                        courses
                                    </h2>
                                    <div className="squire"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nihil minus ea placeat autem illum, magnam fugit! Enim sit obcaecati magni aliquam repellendus, impedit qui quas velit vel reprehenderit nostrum.</p>
                                    <button type="button" className="btn btn-lg btn-outline button">View All Course</button>
                                    <div className="line">
                                        <div className="squire"></div>
                                        <div className="line-1"></div>
                                        <div className="line-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* <div className="courses-image image-size"></div> */}
                                <img src={courses} className="courses-image image-size" alt="courses"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Offer */}
                <section className="offer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                {/* <div className="offer-image image-size img-responsive"> </div> */}
                                <img src={offer} className="offer-image image-size" alt="offer"/>
                            </div>
                            <div className="col-md-6">
                                <div className="offer-text">
                                    <h2>
                                        Limitless learning, <br />
                                        limitless possibilities
                                    </h2>
                                    <div className="squire"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, sed quo. Sequi expedita, eveniet amet maxime voluptas nulla sit cupiditate obcaecati sint velit tenetur adipisci, explicabo voluptatum dignissimos error Quod.</p>
                                    <button type="button" className="btn btn-lg btn-outline button">Start Free Trial</button>
                                    <div className="line">
                                        <div className="squire"></div>
                                        <div className="line-1"></div>
                                        <div className="line-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Contact */}
                <section className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-text">
                                    <h2>
                                        Sign Up to join our <br />
                                        learning community
                                    </h2>
                                    <form>
                                        {/* <input className="input" type="text" placeholder="Enter Name:" /> */}
                                        {/* <input className="input" type="text" placeholder="Enter Email:" /> */}
                                        {/* <input className="input" type="text" placeholder="Enter Password:" /> */}
                                        <input class="form-control input" type="text" placeholder="Enter Name:"></input>
                                        <input class="form-control input" type="text" placeholder="Enter Email:"></input>
                                        <input class="form-control input" type="text" placeholder="Enter Password:"></input>
                                        <div className="input-btn">
                                            <button className="btn btn-lg btn-outline button">Sign Up</button>
                                            <button className="btn btn-lg btn-outline button">Start Free Trial</button>
                                        </div>
                                    </form>
                                    <div className="line">
                                        <div className="squire"></div>
                                        <div className="line-1"></div>
                                        <div className="line-2"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={contact} className="contact-image image-size" alt="contact"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Footer */}
                <section className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-text">
                                    <div className="footer-title">
                                        <h4>Products</h4> <br />
                                        <small>Our Plan</small>
                                        <small>Free Trial</small>
                                    </div>
                                    <div className="footer-title">
                                        <h4>About Us</h4> <br />
                                        <small>Request Demo</small>
                                        <small>Contact Us</small>
                                    </div>
                                    <div className="footer-title">
                                        <h4>Support</h4> <br />
                                        <small>Feature</small>
                                        <small>Contact Us</small>
                                    </div>
                                    <div className="footer-title">
                                        <h4>Explore</h4> <br/>
                                        <small>Find a nonprofit</small>
                                        <small>Coporate Solution</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-logo">
                                    <img src={logo} alt="logo" />
                                    <button type="button" className="btn btn-lg btn-outline button">Start Free Trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Social Icon */}
                <div className="social-icon">
                    <FaFacebook className="icon" />
                    <FaInstagram className="icon" />
                    <FaLinkedin className="icon" />
                    <FaTwitter className="icon" />
                </div>
            </div>
        )
    }
}