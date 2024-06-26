import React from 'react'
import "./Galery.css"
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'


const Galery = () => {
    return (
        <div>
            <Helmet>
                <title>Gallery</title>
            </Helmet>
            <div className='galery_all'>

                <div className="galery_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="galery_ust">
                                    <span className='galery' >Galery</span>
                                    <p >Eat well, live well </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="galery_image">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-8 col-sm-12 ilk_teref" >

                                <Link to={"/resipes"}><div className='ilk_teref_bir'
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000"
                                ></div></Link>

                                <Link to={"/resipes"}><div className='ilk_teref_iki' data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" ></div>
                                </Link>
                            </div>

                            <div className="col-lg-4 col-md-8 col-sm-12 orta">
                                <Link to={"/resipes"}>
                                    <div className="orta_bir" data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000"
                                    ></div></Link>

                                <Link to={"/resipes"}>
                                    <div className="orta_iki" data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" ></div>
                                </Link>

                                <Link to={"/resipes"}>
                                    <div className="orta_son" data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000" ></div>
                                </Link>

                            </div>

                            <div className=" col-lg-4 col-md-8 col-sm-12 ucuncu_teref">

                                <Link to={"/resipes"}>
                                    <div className="ucuncu_teref_bir" data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000"
                                    ></div>
                                </Link>

                                <Link to={"/resipes"}>
                                    <div className="ucuncu_teref_iki" data-aos="flip-left"
                                        data-aos-easing="ease-out-cubic"
                                        data-aos-duration="2000"
                                    ></div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#start" className='for_top'>
            <i class="fa-solid fa-chevron-up"></i>
            </a>
        </div>

    )
}

export default Galery

