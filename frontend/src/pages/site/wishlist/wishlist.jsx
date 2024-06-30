// import React, { useContext } from 'react';
// import { Helmet } from 'react-helmet';
// import MainContext from '../../../context/context';
// import "./wishlist.css"

// const Wishlist = () => {
//   const { wishlist, basket, setBasket } = useContext(MainContext);

//   const addToBasket = (item) => {
//     setBasket((prevBasket) => {
//       const existingItem = prevBasket.find(basketItem => basketItem._id === item._id);
      
//       if (existingItem) {
//         return prevBasket.map(basketItem => 
//           basketItem._id === item._id 
//             ? { ...basketItem, count: basketItem.count + 1, totalPrice: (basketItem.count + 1) * basketItem.price } 
//             : basketItem
//         );
//       } else {
//         return [...prevBasket, { ...item, count: 1, totalPrice: item.price }];
//       }
//     });
//   };

//   return (
//     <div >
//       <Helmet>
//         <title>Wishlist</title>
//       </Helmet>
// <div className="wishlis_all">
//     <h1 className='wishlis_all_h1' >Wishlist</h1>
// <table className="table table-striped wishlist_table" >
//         <thead className='wishlist_table'>
//           <tr className='wishlist_table'>
//             <th className='wishlist_head' scope="col">#</th>
//             <th  className='wishlist_head'  scope="col">Image</th>
//             <th className='wishlist_head'  scope="col">Title</th>
//             <th  className='wishlist_head' scope="col">Price</th>
//             <th  className='wishlist_head' scope="col">Add to basket</th>
//           </tr>
//         </thead>
//         <tbody>
//           {wishlist &&
//             wishlist.map((item, index) => (
//               item && (
//                 <tr key={index}>
//                   <th scope="row">{index+1}</th>
//                   <td>
//                  {item.img ? (
//                       <img src={"https://images01.nicepagecdn.com/43/46/43461ef27e9c61bced952c39514365d4.jpeg"}  style={{ width: '150px', height: 'auto' }} />
//                     ) : (
//                       'No image available'
//                     )}
//                   </td>
//                   <td className='wishlist_text'>{item.title}</td>
//                   <td className='wishlist_text'>{item.price}</td>
//                   <td>
                    
//                     <button id="wishlist_button_buy" className='wishlist_button_buy' onClick={() => addToBasket(item)}>
//                       <i  className="fa-solid fa-bag-shopping" ></i>
//                     </button>
//                   </td>
//                 </tr>
//               )
//             ))}
//         </tbody>
//       </table>
// </div>
      
//     </div>
//   );
// };

// export default Wishlist;



// isliyen+-

// import React, { useContext } from 'react';
// import { Helmet } from 'react-helmet';
// import MainContext from '../../../context/context';
// import "./wishlist.css";

// const Wishlist = () => {
//   const { wishlist, setWishlist } = useContext(MainContext);

//   const deleteFromWishlist = (id) => {
//     setWishlist(wishlist.filter((item) => item._id !== id));
//   };

//   return (
//     <div className="container my-5 wishlist_container">
//       <Helmet>
//         <title>Wishlist</title>
//       </Helmet>
//       <div className="row">
//         <div className="col-md-12">
//           <h2>Wishlist</h2>
//           <table className="table table-striped wishlist_table">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Image</th>
//                 <th scope="col">Title</th>
//                 <th scope="col">Price</th>
//                 <th scope="col">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {wishlist.map((item, index) => (
//                 <tr key={index}>
//                   <th scope="row">{index + 1}</th>
//                   <td>
//                     {item.img ? (
//                       <img src={item.img} alt={item.title} style={{ width: '60px', height: '60px' }} />
//                     ) : (
//                       'No image available'
//                     )}
//                   </td>
//                   <td>{item.title}</td>
//                   <td>{item.price}$</td>
//                   <td>
//                     <button
//                       onClick={() => {
//                         deleteFromWishlist(item._id);
//                       }}
//                       className="btn btn-danger"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Wishlist;

import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import MainContext from '../../../context/context';
import "./wishlist.css";

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(MainContext);

  const deleteFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
  };

  return (
    <div className="container my-5 wishlist_container">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className="row">
        <div className="col-md-12">
          <h2>Wishlist</h2>
          <table className="table table-striped wishlist_table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item, index) => (
                item && ( // Check if item is not null or undefined
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {item.img ? (
                        <img src={item.img} alt={item.title} style={{ width: '60px', height: '60px' }} />
                      ) : (
                        'No image available'
                      )}
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}$</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteFromWishlist(item._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
