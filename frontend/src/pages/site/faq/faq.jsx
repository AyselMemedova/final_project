import React from 'react'
import "./Faq.css"

const Faq = () => {     
  return (
    <div className='faq_all'>
     <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="faq_top">
                                <h3>FAQ</h3>
                                <p>
                                    Contact us and solve any problem you want</p>
                            </div>
                        </div>
                    </div>
                </div>


<main class="main-content">
        <section class="team">
            <h1>Frequently Asked Questions</h1>
            <div class="team-member">
                <input type="radio" id="member1" name="team" class="team-toggle" checked/>
                <label for="member1" class="team-name">What is Heather Pearson's mission?</label>
                <div class="team-details">
                    <p>We aim to help people acquire healthy living habits with scientific and reliable information.Charlie is our mental health expert, focusing on mindfulness and stress management techniques</p>
                </div>
            </div>
            <div class="team-member">
                <input type="radio" id="member2" name="team" class="team-toggle"/>
                <label for="member2" class="team-name">Who is Dr. Nadine?</label>
                <div class="team-details">
                <p>Dr. Nadine was a respected internal medicine specialist from Hopkins University.Charlie is our mental health expert, focusing on mindfulness and stress management techniques </p>
                </div>
            </div>
            <div class="team-member">
                <input type="radio" id="member3" name="team" class="team-toggle"/>
                <label for="member3" class="team-name">How can I access the resources?</label>
                <div class="team-details">
                <p>You can access our resources through the Pricing & Plans section on the website.Charlie is our mental health expert, focusing on mindfulness and stress management techniques</p>
                </div>
            </div>
        </section>
    </main>

</div>


  )
}

export default Faq