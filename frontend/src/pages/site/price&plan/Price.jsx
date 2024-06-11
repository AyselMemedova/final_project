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

            <div className="price_card">
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
            </div>



        </div>
    )
}

export default Price