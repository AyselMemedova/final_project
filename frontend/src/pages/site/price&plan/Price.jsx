import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import "./Price.css"
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import MainContext from '../../../context/context'
import { Link } from "react-router-dom";

const Price = () => {
    const { data, setData, basket, setBasket } = useContext(MainContext)
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState(null);

    function addToBasket(_id) {
        const target = basket.find((x) => x._id === _id);
        if (target) {
            Toastify({
                text: "Product added successfully",
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
            target.count++;
            target.totalPrice += target.price;
        } else {
            const items = data.find((x) => x._id === _id);
            basket.push({ ...items, count: 1, totalPrice: items.price });
        }
        setBasket([...basket]);
        console.log(basket);
        localStorage.setItem("basketForDiplomWork", JSON.stringify(basket));

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

            <div className='button_sira'>
                <input type='text' placeholder='Search Here' value={search} onChange={(e) => setSearch(e.target.value)} />
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filter </a>
                    <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                        <button id='button_filter' onClick={() => setSortBy({ field: "title", asc: true })}>A-Z</button>
                        <button id='button_filter' onClick={() => setSortBy({ field: "title", asc: false })}>Z-A</button>
                        <button id='button_filter' onClick={() => setSortBy({ field: "price", asc: true })}>Azalan</button>
                        <button id='button_filter' onClick={() => setSortBy({ field: "price", asc: false })}>Artan</button>
                        <button id='button_filter' onClick={() => setSortBy(null)}>Default</button>
                    </div>
                </li>
            </div>

            <div className="pricing-table">
                <div className="container">
                    <div className="row">
                        {
                            data
                                .filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
                                .sort((a, b) => {
                                    if (!sortBy) return 0;
                                    if (sortBy.asc) return a[sortBy.field] > b[sortBy.field] ? 1 : -1;
                                    return a[sortBy.field] < b[sortBy.field] ? 1 : -1;
                                })
                                .map((item, index) => (
                                    <div className="col-lg-4 col-md-8 col-sm-12" data-aos="fade-down"
                                        data-aos-easing="linear"
                                        data-aos-duration="1500" key={index}>
                                        <div className="pricing-card basic">
                                            <div className="card-content">
                                                <h2>{item.title}</h2>
                                                <p className="price">${item.price}</p>
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
                <i className="fa-solid fa-chevron-up"></i>
            </a>
        </div>
    )
}

export default Price
