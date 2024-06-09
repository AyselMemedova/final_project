import React from 'react'
import "./Resipes.css"
import { Helmet } from 'react-helmet'
// import { Link } from "react-router-dom";


const Resipes = () => {
  return (
    <div>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <div className="recipes_page">

        <div className="container ">
          <div className="row">

            <div className="col-6">
              <div className="recipes_text">
                <h1>Fresh Salad</h1>
                <p><h4 data-aos="fade-up"
                  data-aos-duration="3000">Ingridients:</h4>
                </p>
                <p>
                  <span >Base vegetables:               </span>
                  Mixed greens, cucumber, tomatoes, bell pepper, carrot, red onion  radishes, corn, avocado, olives, chickpeas, quinoa, feta cheese </p>

                <p><span >Dressing:</span> Olive oil, lemon juice or vinegar, Dijon mustard, garlic, salt, pepper</p>


                <p>
                  <h4 data-aos="fade-up"
                    data-aos-duration="3000">Preperation:</h4>
                  <p> Wash, chop, and grate.</p>
                  <p>  Mix base and optional vegetables in a bowl.  Add chickpeas, quinoa, or cheese. Whisk olive oil, lemon juice/vinegar, mustard, garlic, salt, and pepper.</p>
                  <p> <span>Serve Immediately:</span> Enjoy fresh!</p>
                </p>

                <button className='recipes_btn'> Order</button>

                <a href="https://www.youtube.com/watch?v=o_Az-1FsK4E"> <button className='recipes_btn'>Make own</button></a>
              </div>



            </div>
            <div className="col-6">
              <div className='recipes_image' data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine">
                <img src="https://images01.nicepagecdn.com/43/46/43461ef27e9c61bced952c39514365d4.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Resipes