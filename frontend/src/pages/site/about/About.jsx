import React from 'react'
import "./About.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet'

AOS.init();
const about = () => {
    return (
        <div>
             <Helmet>
                <title>About</title>
            </Helmet>
            <div className="about_top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about_ust">
                                <span className='about'>About</span>
                                <p>We established this site to help people acquire healthy living habits with scientific and reliable information.</p>
                                {/* <span className='healthy'>Be Healthy</span>
                            <span className='happy'>,Be Happy</span> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="story">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="story_sekil">
                                    <div className='story_sekil_kvadrat'></div>
                                    <div className='story_sekil_kvadrat_sekil'

                                    >
                                        <img data-aos="fade-up"
                                            data-aos-duration="3000" src="https://static.wixstatic.com/media/2a1a02_16092a497c9c4a7b82b55a576c8cd704~mv2.jpg/v1/fill/w_850,h_846,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_16092a497c9c4a7b82b55a576c8cd704~mv2.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="story_text" data-aos="fade-up"
                                    data-aos-duration="3000">


                                    <h2>My Story</h2>
                                    <p>Dr. Nadine was a respected internal medicine specialist who graduated from Hopkins University
                                        Faculty of Medicine and touched the lives of many patients over the years. The knowledge and experiences he gained throughout his medical education have given him a deep understanding of protecting and improving the health of his patients. </p>

                                    <p>Dr. Nadine's website was full of articles combining the education he received at Hopkins University
                                        Hopkins University
                                        and his years of experience. This platform, easily accessible to everyone, showed that healthy life was accessible to everyone.  This site was a reflection of his dedication to his patients and desire to serve the community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about_orta">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className='img1'>
                                <img data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500" src="https://static.wixstatic.com/media/2a1a02_8ebaf96662c1405dbbc33240d1339443~mv2.jpg/v1/crop/x_0,y_39,w_3840,h_5721/fill/w_315,h_463,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/pexels-daria-shevtsova-4117547.jpg" alt="" />

                            </div>
                        </div>

                        <div className="col-3">
                            <div className="img2">
                                <img data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500" src="https://static.wixstatic.com/media/2a1a02_03fb3e2cc1034553b1d1424cf3725206~mv2.jpg/v1/crop/x_264,y_1016,w_4076,h_5626/fill/w_251,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1188879344.jpg" alt="" />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className='img3' >
                                <img data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500" src="https://static.wixstatic.com/media/2a1a02_95d10376d1e748be8c834271ccec0ab7~mv2.jpg/v1/fill/w_825,h_574,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_95d10376d1e748be8c834271ccec0ab7~mv2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about_bottom" >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about_bottom_text">
                                <h3>Specialties</h3>
                                <div className='about_bottom_text_p' data-aos="fade-up"
                                    data-aos-duration="3000">
                                    <p>
                                        Digestive Wellness</p> <div className='about_xett'></div>
                                    <p>Food Allergies & <br />Sensitivities</p> <div className='about_xett'></div>
                                    <p>Healthy Cooking & <br /> Meal Planning</p> <div className='about_xett'></div>
                                    <p>
                                        Diets & Detoxing</p> <div className='about_xett'></div>

                                    <p>Elimination Diets</p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default about