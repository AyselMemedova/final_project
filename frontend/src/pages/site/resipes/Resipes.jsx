import React, { useContext ,useState} from 'react';
import "./Resipes.css";
import { Helmet } from 'react-helmet';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import MainContext from '../../../context/context';

const Recipes = () => {
  const { basket, setBasket, wishlist, setWishlist } = useContext(MainContext);
  const [isInWishlist, setIsInWishlist] = useState(false); 

  const addToBasket = () => {
    const item = {
      _id: 'fresh-salad',
      title: 'Fresh Salad',
      description: 'A fresh and healthy salad with mixed greens and vegetables.',
      price: 10,
      count: 1,
      totalPrice: 10,
    };

    const existingItem = basket.find((x) => x._id === item._id);
    if (existingItem) {
      existingItem.count++;
      existingItem.totalPrice += item.price;
    } else {
      setBasket([...basket, item]);
    }

    Toastify({
      text: "Product added to basket successfully",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  };

  const addToWishlist = () => {
    const newItem = {
      _id: 'fresh-salad',
      title: 'Fresh Salad',
      description: 'A fresh and healthy salad with mixed greens and vegetables.',
      price: 10,
      img: 'https://images01.nicepagecdn.com/43/46/43461ef27e9c61bced952c39514365d4.jpeg'
    };

    const target = wishlist.find((x) => x._id === newItem._id);

    if (target) {
      const updatedWishlist = wishlist.filter((x) => x._id !== newItem._id);
      setWishlist(updatedWishlist);
      setIsInWishlist(false); 
      Toastify({
        text: "Product removed from wishlist",
        className: "info",
        style: {
          background: "linear-gradient(to right, #e27d5e, #ffafcc)",
        }
      }).showToast();
    } else {
      setWishlist([...wishlist, newItem]);
      setIsInWishlist(true); 
      Toastify({
        text: "Product added to wishlist",
        className: "info",
        style: {
          background: "linear-gradient(to right, #256b4f, #6d7c76)",
        }
      }).showToast();
    }
  };

  return (
    <div>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <div className="recipes_page">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="recipes_text">
                <h1>Fresh Salad</h1>
                <button id='recipes_add_btn' onClick={addToWishlist}>
                  <i className={`fa-solid fa-heart ${isInWishlist ? 'wishlist-active' : ''}`}></i>
                </button>
                <p><h4>Ingredients:</h4></p>
                <p>
                  <span>Base vegetables: </span>
                  Mixed greens, cucumber, tomatoes, bell pepper, carrot, red onion radishes, corn, avocado, olives, chickpeas, quinoa, feta cheese
                </p>
                <p><span>Dressing:</span> Olive oil, lemon juice or vinegar, Dijon mustard, garlic, salt, pepper</p>
                <p>
                  <h4>Preparation:</h4>
                  <p>Wash, chop, and grate.</p>
                  <p>Mix base and optional vegetables in a bowl. Add chickpeas, quinoa, or cheese. Whisk olive oil, lemon juice/vinegar, mustard, garlic, salt, and pepper.</p>
                  <p><span>Serve Immediately:</span> Enjoy fresh!</p>
                </p>
                <button className='recipes_btn' onClick={addToBasket}>Order: $10</button>
                <a href="https://www.youtube.com/watch?v=o_Az-1FsK4E"> <button className='recipes_btn'>Make own</button></a>
              </div>
            </div>
            <div className="col-6">
              <div className='recipes_image'>
                <img src="https://images01.nicepagecdn.com/43/46/43461ef27e9c61bced952c39514365d4.jpeg" alt="Fresh Salad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipes;

