import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import "./Price.css"
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import MainContext from '../../../context/context'

const Price = () => {
    const { data, setData, basket, setBasket } = useContext(MainContext)

    function addToBasket(_id) {
        const target = basket.find((x) => x._id == _id);
        if (target) {
            Toastify({
                text: "Product added succesfully",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
            target.count++;
            target.totalPrice += target.price
        }
        else {
            const items = data.find((x) => x._id == _id);
            basket.push(items)
        }
        setBasket([...basket])
        console.log(basket);
    }

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
                                <span className='price'>Price&Plans</span>
                                <p>Choose the plan that fits your goals </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pricing-table ">
                <div className="container">
                    <div className="row">
                        {
                            data.map((item, index) => (
                                <div className="col-lg-4 col-md-8 col-sm-12" data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500">
                                    <div class="pricing-card basic" key={index}>
                                        <div class="card-content">
                                            <h2>{item.title}</h2>
                                            <p class="price">${item.price}</p>
                                            <p>{item.description}</p>
                                            <button onClick={() => { addToBasket(item._id) }} >Select</button>
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