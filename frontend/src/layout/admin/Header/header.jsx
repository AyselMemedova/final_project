import React from 'react'
import { Link } from "react-router-dom";
import "./header.css"
const Header = () => {
    return (
        <div className='header-wrapper'>
             <div className='header_all'>
                <div className="container">
                    <div className="row all_header ">
                        <div className="col-lg-4">
                            <div className='header_logo'>
                            <div className='header_logo_sekil'>
                                    <svg preserveAspectRatio="xMidYMid meet" data-bbox="19.967 54.567 160.063 90.733" xmlns="http://www.w3.org/2000/svg" width="59" height="33" viewBox="19.967 54.567 160.063 90.733" data-type="color" role="img" aria-label="Homepage"><defs></defs>
                                    <g>
                                        <path fill="#008566" d="M179.9 97.4c-.9-11.9-6.4-22.7-15.4-30.4-9-7.8-20.6-11.5-32.5-10.6-11.9.9-22.7 6.4-30.4 15.4l-11.4 13c-7.5-4.4-17-.1-28.1 13.1l4 3.4C74.7 91.2 81.6 87 86.7 88.9l-14.9 17.2 4 3.4 14.9-17.2c2.6 4.7-.3 12.1-8.8 22.2l4 3.4c11-13 13.8-23 8.4-29.7l11.3-13.1c6.8-8 16.4-12.8 26.9-13.6 10.5-.8 20.7 2.5 28.6 9.4 8 6.8 12.8 16.4 13.6 26.9s-2.5 20.7-9.4 28.6c-6.8 8-16.4 12.8-26.9 13.6-10.5.8-20.7-2.5-28.6-9.4l-3.4 4c8.2 7 18.3 10.7 29 10.7 1.2 0 2.3 0 3.5-.1 11.9-.9 22.7-6.4 30.4-15.4 7.7-9 11.5-20.5 10.6-32.4z" data-color="1"></path>
                                        <path fill="#008566" style={{ height: '200px', width:"40px" }}  d="M118.5 124.5l1.7-1.7c16.4-16.4 24.4-29.9 23.7-40.1-.4-5.7-3.5-8.2-3.8-8.5l-2-1.5-43.6 52c-14.1 16.5-39 18.4-55.5 4.3-8-6.8-12.8-16.4-13.6-26.9s2.5-20.7 9.4-28.6c6.8-8 16.4-12.8 26.9-13.6 10.5-.8 20.7 2.5 28.6 9.4l3.4-4c-9.1-7.8-20.6-11.5-32.5-10.6-11.9.9-22.7 6.4-30.5 15.4s-11.5 20.6-10.6 32.5c.9 11.9 6.4 22.7 15.4 30.4 8.4 7.2 18.7 10.7 29 10.7 12.6 0 25.1-5.3 33.9-15.6l10-12 10.1 8.4zm19.7-43.7c.2.7.4 1.6.5 2.7.2 4.7-2.2 15.3-20.5 34l-6.3-5.2 26.3-31.5z" data-color="1"></path>
                                    </g>
                                </svg>
                            </div>
                                <span><Link to={"/admin"}>Heather Pearson</Link></span>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className='header_right'>
                            <div className='header_list'>
                            <ul>
                                <li> <Link to={"/admin/add"}>Add Product</Link></li>
                                {/* <li> <Link to={"/admin/Addİmg"}>Add İmage</Link></li> */}
                                {/* <li ><Link to={"/admin/add_blog"}>Blog</Link></li> */}
                                <li><Link to={"/admin/product"}>Product</Link></li>
                            </ul>
                            </div>

                            {/* <div className='header_log_in'>
                            <i class="fa-regular fa-user"></i>
                            <span>Log In</span>
                            </div> */}
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header
                                