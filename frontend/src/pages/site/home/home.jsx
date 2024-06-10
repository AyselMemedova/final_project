import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import MainContext from '../../../context/context'
import "./home.css"
import { Link } from "react-router-dom";


const Home = () => {
    const { data, setdata } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* 1Cİ SECTİON */}
            <div className='first'>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="left_image">
                                <img src="https://static.wixstatic.com/media/2a1a02_b7200f82e5184dbeac5321d69e69789f~mv2.jpg/v1/fill/w_950,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_b7200f82e5184dbeac5321d69e69789f~mv2.jpg" alt="" />
                            </div>

                            <div className="first_text" >
                                <h1 data-aos="fade-up"
                                    data-aos-duration="3000">Be Healthy, <br />
                                    Be Happy</h1>
                                <p data-aos="fade-up"
                                    data-aos-duration="3000">
                                    I'm Heather, a registered dietitian and certified health coach.</p>
                            </div>
                        </div>


                        <div className="col-6">
                            <div className="right_image">
                                <img src="https://static.wixstatic.com/media/2a1a02_f6d42212f7f342c6b0e11c6a4f46f1da~mv2.jpg/v1/fill/w_950,h_1088,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_f6d42212f7f342c6b0e11c6a4f46f1da~mv2.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* 2Cİ SECTİON */}
            <div className="second_all">
                <div className="second_improve">
                    <div className='second_improve_text'>
                        <h2 data-aos="fade-up"
                            data-aos-duration="3000">Improve Your Health, <br /> Improve Your Life</h2>
                        <p>Dr. Nadine was a respected internal medicine specialist who graduated from Hopkins University
                            Faculty of Medicine and touched the lives of many patients over the years. The knowledge and understanding of protecting and improving the health of his patients. </p>

                        <Link to={"/About"}> <button data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0" className='story'>My Story</button></Link>
                    </div>


                    <div className="second_improve_img">
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className="second_improve_img_banan">
                            <img src="https://static.wixstatic.com/media/2a1a02_0e0e3f6f4cd640c3877e13236d5ca831~mv2.jpg/v1/fill/w_654,h_475,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1185840254.jpg" alt="" />
                        </div>

                        <div data-aos="fade-up"
                            data-aos-duration="3000" className="second_improve_img_bread">
                            <img src="https://static.wixstatic.com/media/2a1a02_c3a7662fce824c94916d2cc38d4c7609~mv2.jpg/v1/fill/w_481,h_654,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-578862140_edited.jpg" alt="" />
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="3000" className="second_improve_img_greens">
                            <img src="https://static.wixstatic.com/media/2a1a02_662248bd318a496da3858ad2d01b95a7~mv2.jpg/v1/fill/w_481,h_650,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/marty-harrington-UOVXWFNaZAo-unsplash_jp.jpg" alt="" />
                        </div>

                    </div>

                </div>
            </div>

            {/* HOW IT WORKS SECTİON -3CU*/}
            <div className='work_section'>
                <h2 data-aos="fade-up"
                    data-aos-duration="3000">HOW IT WORKS</h2>

                <div className="container">
                    <div className="row">
                        <div className="col-3 work_list " data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className='work_text '>
                                <i class="fa-solid fa-list-check"></i>
                                <Link to={"/form"}> <h5>FILL IN FORM</h5></Link>
                                <p>
                                    Write information about yourself</p>
                            </div>

                            <div className='work_right_icon'>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>

                        </div>


                        <div className="col-3 work_list" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className='work_text'>
                                <i class="fa-solid fa-user-doctor"></i>
                                <Link to={"/contact"}>
                                    <h5>GET CONSULTATION</h5>

                                </Link>
                                <p>Get online consultation with your doctor</p>
                            </div>
                            <div className='work_right_icon'>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>

                        </div>

                        <div className="col-3 work_list" data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine">
                            <div className='work_text'>

                                <i class="fa-regular fa-credit-card"></i>
                                <Link to={"/payment"}>
                                    <h5>PERFORM PAYMENT</h5>
                                </Link>
                                <p>Pay what you order plan fits you</p>
                            </div>
                            <div className='work_right_icon'>
                                <i class="fa-solid fa-chevron-right"></i>
                            </div>
                        </div>


                        <div className="col-3 work_list" >
                            <div className='work_text' data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">

                                <i class="fa-solid fa-box-open"></i>
                                <h5>GET YOUR PLAN</h5>
                                <p>Start your healthy & happy  <br />life </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='work_btn'>
                    <Link to={"/plans"}> <button data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0" className='story'>Learn More</button></Link>

                </div>

            </div>

            {/* NOURUSH SECTİON -4CÜ*/}
            <div className="nourish">
                <div className="nourish_headr">
                    <h2 data-aos="fade-up"
                        data-aos-duration="3000">Nourish Your Body & Soul</h2>
                </div>

                <div className="nourish_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className='nourish_first_card'>
                                    <img src="https://static.wixstatic.com/media/2a1a02_1f38d9901e2345a483fd9e9c4d1d79bc~mv2.jpg/v1/fill/w_925,h_925,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_1f38d9901e2345a483fd9e9c4d1d79bc~mv2.jpg" alt="" />

                                    <Link to={"/blog"}><p>How to Change Your Eating Habits</p></Link>
                                    {/* <p>How to Change Your Eating Habits</p> */}
                                </div>
                            </div>


                            <div className="col-4">
                                <div className="nourish_second_card">
                                    <img src="https://static.wixstatic.com/media/2a1a02_9f5f27f07de44c509a37a1d4deabde9f~mv2.jpg/v1/fill/w_925,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_9f5f27f07de44c509a37a1d4deabde9f~mv2.jpg" alt="" />

                                    <Link to={"/blog"}><p>Don’t Be Afraid of the Scale!</p></Link>
                                    {/* <p>Don’t Be Afraid of the Scale!</p> */}
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="nourish_third_card">
                                    <img src="https://static.wixstatic.com/media/2a1a02_5f2118197ee24dfe8c47fd0d38e3cad4~mv2.jpg/v1/fill/w_925,h_925,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_5f2118197ee24dfe8c47fd0d38e3cad4~mv2.jpg" alt="" />

                                    <Link to={"/blog"}><p>The  Best Podcasts for Intuitive Eating</p></Link>
                                    {/* <p>The 3 Best Podcasts for Intuitive Eating</p> */}
                                </div>

                            </div>
                        </div>
                    </div>
                    <Link to={"blog"}>
                        <button data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0"> Read More</button>
                    </Link>
                </div>

            </div>

            {/* FEATURED SECTİON -SON*/}
            <div className="featured">
                <h3 data-aos="fade-up"
                    data-aos-duration="3000">As Featured In</h3>
                <div className="featured_logos">
                    <img data-aos="fade-up"
                        data-aos-duration="3000" style={{ height: "49px", width: "190px" }} src="https://static.wixstatic.com/media/84770f_445714550a104ac29f8c05c0a0f5dc4b~mv2.jpg/v1/fill/w_238,h_61,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/featured%20logos-29.jpg" alt="" />

                    <img data-aos="fade-up"
                        data-aos-duration="3000" style={{ height: "75px", width: "190px" }} src="https://static.wixstatic.com/media/84770f_dfa12e8fc21d44c2a73b964d368718ad~mv2.jpg/v1/fill/w_238,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/featured%20logos-30.jpg" alt="" />


                    <img data-aos="fade-up"
                        data-aos-duration="3000" style={{ height: "45px", width: "190px" }} src="https://static.wixstatic.com/media/84770f_1c392be4afbe488b996880641a3b7b48~mv2.jpg/v1/fill/w_238,h_56,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/featured%20logos-31.jpg" alt="" />

                    <img data-aos="fade-up"
                        data-aos-duration="3000" style={{ height: "34px", width: "170px" }} src="https://static.wixstatic.com/media/84770f_a1c0f2d814954893b257e1d891856c24~mv2.jpg/v1/fill/w_213,h_43,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/featured%20logos-32.jpg" alt="" />

                    <img data-aos="fade-up"
                        data-aos-duration="3000" style={{ height: "84px", width: "170px" }} src="https://static.wixstatic.com/media/84770f_b8211f91bb9046fda205fc37fac1e70c~mv2.jpg/v1/fill/w_213,h_105,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/featured%20logos-33.jpg" alt="" />

                </div>
            </div>

        </>
    )
}

export default Home
