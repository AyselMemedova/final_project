import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "./Price.css"
import MainContext from '../../../context/context'

const Price = () => {
    const {data,setData}=useContext(MainContext)
    return (
        <div>
            <Helmet>
                <title>Price&Plans</title>
            </Helmet>

            <div className="price_top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="price_ust">
                                <span className='price'
                                // data-aos="fade-up"
                                //     data-aos-duration="3000"
                                >Price&Plans</span>
                                <p
                                // data-aos="fade-up"
                                //     data-aos-duration="3000"
                                >Choose the plan that fits your goals </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pricing-table ">
                <div className="container">
                    <div  className="row">
                        {
                            data.map((item,index)=>(
                                <div className="col-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div class="pricing-card basic" key={index}>
                                <div class="card-content">
                                    <h2>{item.title}</h2>
                                    <p class="price">${item.price}</p>
                                    <p>{item.description}</p>
                                    <button>Select</button>
                                    <ul>
                                        <li>{item.haqqinda}</li>
                                        <li>{item.haqqindaki}</li>
                                        <li>{item.haqqindauc}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            ))
                        }

                        {/* <div className="col-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div class="pricing-card best-value ">
                                <div class="card-content">
                                    <h2>Become a Meal Prep</h2>
                                    <p class="price">$120</p>
                                    <p>Valid for one month</p>
                                    <button>Select</button>
                                    <ul>
                                        <li>4 sessions</li>
                                        <li>4 cooking lessons</li>
                                        <li>40 recipes</li>
                                        <li>Full meal prep plan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-4" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500">
                            <div class="pricing-card ">
                                <div class="card-content">
                                    <h2>Balance it All</h2>
                                    <p class="price">$150</p>
                                    <p>Valid for 2 months</p>
                                    <button>Select</button>
                                    <ul>
                                        <li>4 sessions</li>
                                        <li>4 shopping sessions</li>
                                        <li>4 cooking lessons</li>
                                        <li>60 recipes</li>
                                        <li>Full meal prep plan</li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <a href="#start" className='for_top'>
            <i class="fa-solid fa-chevron-up"></i>
            </a>
        </div>
    )
}

export default Price