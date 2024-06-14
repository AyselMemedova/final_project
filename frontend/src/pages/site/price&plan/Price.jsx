import React from 'react'
import { Helmet } from 'react-helmet'
import "./Price.css"

const Price = () => {
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

            {/* <div className="price_card">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className='price_card_top'>
                                <h2>Get the Basics</h2>
                                <span>80$</span>
                                <p>Valid for one month</p>
                                <button>Select</button>
                            </div>
                            <div className=''>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div class="pricing-table ">
        <div class="pricing-card "  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <h2>Get the Basics</h2>
            <p class="price">$80</p>
            <p >Valid for one month</p>
            <button  >Select</button>
            <ul>
                <li>4 sessions</li>
                <li>20 recipes</li>
                <li>Full meal prep plan</li>
            </ul>
        </div>
        <div class="pricing-card best-value" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
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
        <div class="pricing-card" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
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
    </div> */}


            <div class="pricing-table ">
                <div className="container">
                    <div style={{textAlign:"center"}} className="row">
                        <div className="col-4" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                            <div class="pricing-card  basic">
                                <div class="card-content">
                                    <h2>Get the Basics</h2>
                                    <p class="price">$80</p>
                                    <p>Valid for one month</p>
                                    <button>Select</button>
                                    <ul>
                                        <li>4 sessions</li>
                                        <li>20 recipes</li>
                                        <li>Full meal prep plan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-4" data-aos="fade-down"
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
                        </div>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default Price