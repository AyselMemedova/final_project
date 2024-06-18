import React from 'react'
import "./News.css"
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet'

const News = () => {
  return (
    <div className='news_all'>
         <Helmet>
                <title>News</title>
            </Helmet>
        <div className='news_time'>
            <ul>
                <li>Mar 22, 2023 </li>
                <li style={{listStyleType:"disc"}}>2 min read</li>
            </ul>

        </div>
        <h2>Don’t Be Afraid of the Scale!</h2>
        <p className='news_ilk_p'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
        <img src="https://static.wixstatic.com/media/2a1a02_9f5f27f07de44c509a37a1d4deabde9f~mv2.jpg/v1/fill/w_925,h_618,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_9f5f27f07de44c509a37a1d4deabde9f~mv2.jpg" alt="" />

        <p className='news_sekil_alt'>Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more.</p>
        <h5>Design with Ease</h5>
        <div className='news_ilk_text'>
        <div className='news_duz_xett'></div>
        <h3>“Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.”</h3>
        </div>
        <div/>

        <p>Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier.</p>
       
       <h5>Stun Your Readers</h5>
       <div className='news_ilk_text'>
        <div className='news_duz_xett_iki'></div>
        <h3>“Be original, show off your style, and tell your story.”</h3>
       </div>
        <p>Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way.</p>
        <Link to={"/blog"}> <button className='news_btn'>See All</button></Link>

        <a href="#start" className='for_top'>
            <i class="fa-solid fa-chevron-up"></i>
            </a>
    </div>
  )
}

export default News