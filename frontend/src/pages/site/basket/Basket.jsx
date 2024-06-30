import React, { useContext, useEffect } from 'react';
import "./Basket.css";
import { Helmet } from 'react-helmet';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import MainContext from '../../../context/context';

const Basket = () => {
  const { basket, setBasket } = useContext(MainContext);

  useEffect(() => {
    const storedBasket = localStorage.getItem('basketForDiplomWork');
    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, [setBasket]);

  let TotalPrice = 0;
  for (let i = 0; i < basket.length; i++) {
    TotalPrice += basket[i].totalPrice;
  }

  function updateLocalStorage(updatedBasket) {
    localStorage.setItem('basketForDiplomWork', JSON.stringify(updatedBasket));
  }

  function increaseMehsul(_id) {
    const target = basket.find((x) => x._id === _id);
    target.count++;
    target.totalPrice += target.price;
    Toastify({
      text: "Product added successfully",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    const updatedBasket = [...basket];
    setBasket(updatedBasket);
    updateLocalStorage(updatedBasket);
  }

  function decreaseMehsul(item) {
    if (item.count > 1) {
      item.count--;
      item.totalPrice -= item.price;
      Toastify({
        text: "Product deleted",
        className: "error",
        style: {
          background: "linear-gradient(to right, #ff5f6d, #ffc371)",
        }
      }).showToast();
    } else {
      const targetOfBasket = basket.find((x) => x._id === item._id);
      const targetOfIndex = basket.indexOf(targetOfBasket);
      basket.splice(targetOfIndex, 1);
    }
    const updatedBasket = [...basket];
    setBasket(updatedBasket);
    updateLocalStorage(updatedBasket);
  }

  return (
    <div>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <main className="page" style={{ color: "rgb(29, 59, 42)" }}>
        <section className="shopping-cart dark">
          <div className="container">
            <div className="block-heading">
              <h2 style={{ color: "rgb(29, 59, 42)", fontSize: "50px" }}>Basket</h2>
            </div>
            <div className="content page_basket_bcki">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="items">
                    {basket.map((item, index) => (
                      <div className="product" key={index}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="info">
                              <div className="row">
                                <div className="col-md-6 product-name">
                                  <div className="product-name" style={{ marginLeft: "20px" }}>
                                    <a href="#" style={{ fontSize: "28px", color: "#2a815c", fontFamily: "Caudex" }}>{item.title}</a>
                                    <div className="product-info" style={{ fontSize: "14px", fontFamily: "Wix Madefor Display" }}>
                                      <div><span className="value" style={{ fontSize: "20px", fontFamily: "Wix Madefor Display" }}>{item.description}</span></div>
                                      <div><span className="value">{item.haqqinda}</span></div>
                                      <div><span className="value">{item.haqqindaki}</span></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-4" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                  <button style={{ width: "50px", height: "50px" }} className='btn btn-warning' onClick={() => decreaseMehsul(item)}>-</button>
                                  <div className="price" style={{ display: "flex", flexDirection: "column", marginLeft: "8px" }}>
                                    <span style={{ fontSize: "22px", marginRight: "20px", fontFamily: "Wix Madefor Display" }}>Item price: ${item.price}</span>
                                    <p style={{ fontSize: "14px", fontFamily: "Wix Madefor Display" }}>Item <br /> Count: {item.count}</p>
                                  </div>
                                  <button style={{ width: "50px", height: "50px" }} className='btn btn-danger' onClick={() => increaseMehsul(item._id)}>+</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="summary">
                    <h3 style={{ color: "#2a815c", fontSize: "40px", fontFamily: "Caudex" }}>Summary</h3>
                    <div className="summary-item" style={{ fontSize: "28px", fontFamily: "Wix Madefor Display" }}><span className="text">Total: </span><span className="price">${TotalPrice}</span></div>
                    <button type="button" className="basket_button">Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Basket;
