import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context/context';
import "./wishlist.css"
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
const Wishlist = () => {
  const { wishlist, setWishlist, basket, setBasket } = useContext(MainContext);

  const deleteFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
  };

  const addToBasket = (item) => {
    setBasket((prevBasket) => {
      const existingItem = prevBasket.find(basketItem => basketItem._id === item._id);
      
      if (existingItem) {
        Toastify({
          text: "Product added successfully",
          className: "info",
          style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
          }
      }).showToast();
        return prevBasket.map(basketItem => 
          basketItem._id === item._id 
            ? { ...basketItem, count: basketItem.count + 1, totalPrice: (basketItem.count + 1) * basketItem.price } 
            : basketItem
        );
      } else {
        return [...prevBasket, { ...item, count: 1, totalPrice: item.price }];
      }
    });
  };

  return (
    <div >
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
<div className="wishlis_all">
    <h1 className='wishlis_all_h1' >Wishlist</h1>
<table className="table table-striped wishlist_table" >
        <thead className='wishlist_table'>

          <tr className='wishlist_table'>
            <th className='wishlist_head' scope="col">#</th>
            <th  className='wishlist_head'  scope="col">Image</th>
            <th className='wishlist_head'  scope="col">Title</th>
            <th  className='wishlist_head' scope="col">Price</th>
              <th className='wishlist_head' scope="col">Delete</th>
            <th  className='wishlist_head' scope="col">Add to basket</th>
          </tr>
        </thead>
        <tbody>
          {wishlist &&
            wishlist.map((item, index) => (
              item && (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>
                 {item.img ? (
                      <img src={"https://images01.nicepagecdn.com/43/46/43461ef27e9c61bced952c39514365d4.jpeg"}  style={{ width: '150px', height: 'auto' }} />
                    ) : (
                      'No image available'
                    )}
                  </td>
                  <td className='wishlist_text'>{item.title}</td>
                  <td className='wishlist_text'>{item.price}</td>
                    <td><button
                        onClick={() => {
                          deleteFromWishlist(item._id);
                        }}
                        className="btn btn-danger"
                        id='wislist_sil'
                      >
                        Delete
                      </button></td>
                  <td>
                    <button id="wishlist_button_buy" className='wishlist_button_buy' onClick={() => addToBasket(item)}>
                      <i  className="fa-solid fa-bag-shopping" ></i>
                    </button>
                  </td>
                </tr>
              )
            ))}
        </tbody>
      </table>
</div>
      
    </div>
  );
};

export default Wishlist;