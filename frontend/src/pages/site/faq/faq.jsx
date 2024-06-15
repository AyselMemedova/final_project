import React from 'react'
import "./Faq.css"

const Faq = () => {     
  return (
    <div className='faq_all'>
       <main class="main-content">
        <section class="faq">
            <h1>Frequently Asked Questions</h1>
            <div class="faq-item">
                <input type="radio" id="faq1" name="faq" class="faq-toggle"/>
                <label for="faq1" class="faq-question">What is Heather Pearson's mission?</label>
                <div class="faq-answer">
                    We aim to help people acquire healthy living habits with scientific and reliable information.
                </div>
            </div>
            <div class="faq-item">
                <input type="radio" id="faq2" name="faq" class="faq-toggle"/>
                <label for="faq2" class="faq-question">Who is Dr. Nadine?</label>
                <div class="faq-answer">
                    Dr. Nadine was a respected internal medicine specialist from Hopkins University.
                </div>
            </div>
            <div class="faq-item">
                <input type="radio" id="faq3" name="faq" class="faq-toggle"/>
                <label for="faq3" class="faq-question">How can I access the resources?</label>
                <div class="faq-answer">
                    You can access our resources through the Pricing & Plans section on the website.
                </div>
            </div>
        </section>
    </main>
</div>


  )
}

export default Faq