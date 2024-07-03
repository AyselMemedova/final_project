

import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContext from './context/context';
import ROUTES from './Routes/routes';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [heart, setHeart] = useState(
    localStorage.getItem('heart') ? JSON.parse(localStorage.getItem('heart')) : []
  );
  const [wishlist, setWishlist] = useState(
    localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : []
  );
  const [basket, setBasket] = useState(
    localStorage.getItem('basketForDiplomWork')
      ? JSON.parse(localStorage.getItem('basketForDiplomWork'))
      : []
  );

  const router = createBrowserRouter(ROUTES);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/mehsular')
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('basketForDiplomWork', JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('heart', JSON.stringify(heart));
  }, [heart]);

  function addToWishlist(item) {
    const isItemInWishlist = wishlist.find((x) => x.id === item.id);
    if (isItemInWishlist) {
      const newWishlist = wishlist.filter((x) => x.id !== item.id);
      setWishlist(newWishlist);
    } else {
      setWishlist([...wishlist, { ...item }]);
    }
    const isItemInHeartList = heart.includes(item.id);
    if (isItemInHeartList) {
      setHeart(heart.filter((id) => id !== item.id));
    } else {
      setHeart([...heart, item.id]);
    }
  }

  function deleteFromWishlist(id) {
    setWishlist([...wishlist.filter((x) => x._id !== id)]);
  }

  return (
    <MainContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        error,
        setError,
        basket,
        setBasket,
        wishlist,
        setWishlist,
        heart,
        setHeart,
        addToWishlist,
        deleteFromWishlist
      }}
    >
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
