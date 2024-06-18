import React from 'react'
import "./Blog.css"
import { Helmet } from 'react-helmet'


const Blog = () => {
    return (
        <div>
             <Helmet>
                <title>Blog</title>
            </Helmet>
            <div className="blog_ust">
                
                <div class="container-fluid about-section">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1>Blog</h1>
                            <p>Dive deep into my thoughts about eating well and living well.</p>
                        </div>
                    </div>
                </div>

            <div className="blog_card_section">

            <div class="container mt-5">
                <div class="row">
                    <div class="col-12 col-md-4 mb-4"  data-aos="fade-up" data-aos-duration="3000">
                        <div class="card">
                            <img src="https://static.wixstatic.com/media/2a1a02_1f38d9901e2345a483fd9e9c4d1d79bc~mv2.jpg/v1/fill/w_365,h_365,fp_0.50_0.50,q_90,enc_auto/2a1a02_1f38d9901e2345a483fd9e9c4d1d79bc~mv2.jpg" class="card-img-top" alt="Chia Pudding" />
                            <div class="card-body card-content">
                                <p class="card-text"><small class="text-muted">Admin</small></p>
                                <p class="card-text"><small class="text-muted">Mar 22, 2023 • 1 min</small></p>
                                <h5 class="card-title">How to Change Your Eating Habits</h5>
                                <p class="card-text">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...</p>
                                <div className='blog_xett'></div>

                                <p class="card-text"><small class="text-muted">0 comments</small> <span class="float-right"><i class="fa-regular fa-heart"></i> 1</span></p>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "250px" }} class="col-12 col-md-4 mb-4"  data-aos="fade-up" data-aos-duration="3000">
                        <div class="card second">
                            <img src="https://static.wixstatic.com/media/2a1a02_9f5f27f07de44c509a37a1d4deabde9f~mv2.jpg/v1/fill/w_365,h_244,fp_0.50_0.50,q_90,enc_auto/2a1a02_9f5f27f07de44c509a37a1d4deabde9f~mv2.jpg" class="card-img-top" alt="Scale" />
                            <div class="card-body">
                                <p class="card-text"><small class="text-muted">Admin</small></p>
                                <p class="card-text"><small class="text-muted">Mar 22, 2023 • 2 min</small></p>
                                <h5 class="card-title">Don’t Be Afraid of the Scale!</h5>
                                <p class="card-text">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...</p>
                                <div className='blog_xett'></div>
                                <p class="card-text"><small class="text-muted">0 comments</small> <span class="float-right"><i class="fa-regular fa-heart"></i> 1</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 mb-4"  data-aos="fade-up" data-aos-duration="3000">
                        <div class="card">
                            <img src="https://static.wixstatic.com/media/2a1a02_5f2118197ee24dfe8c47fd0d38e3cad4~mv2.jpg/v1/fill/w_365,h_365,fp_0.50_0.50,q_90,enc_auto/2a1a02_5f2118197ee24dfe8c47fd0d38e3cad4~mv2.jpg" class="card-img-top" alt="Healthy Toasts" />
                            <div class="card-body">
                                <p class="card-text"><small class="text-muted">Admin</small></p>
                                <p class="card-text"><small class="text-muted">Mar 22, 2023 • 1 min</small></p>
                                <h5 class="card-title">The 3 Best Podcasts for Intuitive Eating</h5>
                                <p class="card-text">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...</p>
                                <div className='blog_xett'></div>

                                <p class="card-text"><small class="text-muted">0 comments</small> <span class="float-right"><i class="fa-regular fa-heart"></i> 2</span></p>
                            </div>
                        </div>
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

export default Blog