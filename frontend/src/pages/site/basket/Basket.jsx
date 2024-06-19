import React, { useContext } from 'react'
import "./Basket.css"
import { Helmet } from 'react-helmet'

import MainContext from '../../../context/context'

const Basket = () => {
  const { basket, setBasket } = useContext(MainContext)
  let TotalPrice = 0
  for (let i = 0; i < basket.length; i++) {
    TotalPrice += basket[i].totalPrice
  }

  function increaseMehsul(_id) {
    const target=basket.find((x)=>x._id==_id);
    target.count++
    // item.totalPrice += item.price;
    // item.count++;
    setBasket([...basket]);
    // localStorage.setItem("basket", JSON.stringify(basket));
  }

  function decreaseMehsul(item) {
    if (item.count > 1) {
      item.count--;
      item.totalPrice -= item.price;
    } else {
      const targetOfBasket = basket.find((x) => x._id == item._id)
      const targetOfIndex = basket.indexOf(targetOfBasket)
      basket.splice(targetOfIndex, 1);
    }
    setBasket([...basket])
    // localStorage.setItem("basket", JSON.stringify(basket));
  }

  return (
    <div>
      <Helmet>
        <title>Price&Plans</title>
      </Helmet>
      <main class="page">
        <section class="shopping-cart dark">
          <div class="container">
            <div class="block-heading">
              <h2>Basket</h2>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p> */}
            </div>
            <div class="content">
              <div class="row">
                <div class="col-md-12 col-lg-8">
                  <div class="items">

                    {basket.map((item, index) => (
                      <div class="product" >
                        <div class="row" key={index}>
                          <div class="col-md-3">
                            {/* <img class="img-fluid mx-auto d-block image" src="assets/img/image.jpg"/> */}
                          </div>
                          <div class="col-md-8">
                            <div class="info">
                              <div class="row">
                                <div class="col-md-5 product-name">
                                  <div class="product-name">
                                    <a href="#" style={{ fontSize: "22px", }}>{item.title}</a>
                                    <div class="product-info">
                                      <div><span class="value" style={{ fontSize: "20px" }}>{item.description}</span></div>
                                      <div> <span class="value">{item.haqqinda}</span></div>
                                      <div><span class="value">{item.haqqindaki}</span></div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-4 quantity">
                                  {/* <label for="quantity">Quantity:</label> */}
                                  {/* <input id="quantity" type="number" value="1" class="form-control quantity-input"/> */}
                                  <button style={{ width: "50px", height: "50px" }} className='btn btn-warning' onClick={() => {
                                    decreaseMehsul(item)
                                  }}>-</button>
                                  <button style={{ width: "50px", height: "50px" }} className='btn btn-danger' onClick={() => {
                                    increaseMehsul(item._id)
                                  }}>+</button>

                                </div>
                                <div class="col-md-3 price">
                                  <span style={{ fontSize: "26px", marginRight: "20px" }}>${item.price}</span>
                                  <p>{item.count}</p>
                                  <p class="price">Total: ${item.totalPrice}</p>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}


                  </div>
                </div>
                <div class="col-md-12 col-lg-4">
                  <div class="summary">
                    <h3>Summary</h3>
                    {/* <p>{item.count}</p>
                    <p class="price">Total: ${item.totalPrice}</p> */}
                      {/* <p>{item.count}</p>
                    <div class="summary-item"><span class="text">Total</span><span class="price">{item.TotalPrice}$</span></div> */}
                    <button type="button" class="btn btn-primary btn-lg btn-block">Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Basket