import React from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                            <h5 id='footer_h5'>Heather Pearson</h5>
                            <p >A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            <Link to="/about" className="read-more">Read More &rarr;</Link>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                            <h5 id='footer_h5' >Pages</h5>
                            <ul className="footer-links">
                                <li><Link to={"/blog"}>Blog</Link></li>
                                <li><Link to={"/contact"}>Contact</Link></li>
                                <Link to={"/price&plan"} className="dropdown-item">Pricing & Plans</Link>
                                <Link to={"/galery"} className="dropdown-item">Galery</Link>
                                <Link to={"/faq"} className="dropdown-item">FAQ</Link>

                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                            <h5 id='footer_h5'>Tag Cloud</h5>
                            <div className="tag-cloud">
                                <span className="tag">Health</span>
                                <span className="tag">Menu</span>
                                <span className="tag">Food</span>
                                <span className="tag">Salads</span>
                                <span className="tag">Tasty</span>
                                <span className="tag">Delicious</span>
                                <span className="tag">Desserts</span>
                                <span className="tag">Drinks</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-section">
                            <h5 id='footer_h5'>Subscribe</h5>
                            <div className='footer_email'>

                           <textarea name="" id="" rows={2} cols={40} placeholder='Enter your message'></textarea>
                             <button className='footer_email_btn' id='footer_email_btn'>Submit</button>
                           </div>
                           
                            <h5 id='footer_h5' style={{marginTop:"29px"}}>Follow Us</h5>
                            <div className="social-links">
                                <Link to="https://twitter.com" className="social-icon"><i className="fa-brands fa-twitter"></i></Link>
                                <Link to="https://facebook.com" className="social-icon"><i className="fa-brands fa-facebook-f"></i></Link>
                                <Link to="https://instagram.com" className="social-icon"><i className="fa-brands fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Your Company Name. All rights reserved.</p>
               
            </div>
        </div>
    );
}

export default Footer;

