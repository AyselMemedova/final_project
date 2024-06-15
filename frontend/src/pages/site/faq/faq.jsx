import React from 'react'
import "./Faq.css"

const Faq = () => {
  return (
    <div>
        <div class="container-fluid faq-section">
    <div class="row">
        <div class="col-12 text-center">
            <h1>FAQ</h1>
            <p>Your questions, answered.</p>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12 col-md-8 faq-content">
            <div class="faq-item">
                <input type="checkbox" id="faq1" class="faq-toggle"/>
                <label for="faq1" class="faq-label">
                    <h5>How do I change my eating habits?</h5>
                </label>
                <div class="faq-answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisl a eros gravida, in egestas urna vestibulum.</p>
                </div>
            </div>
            <div class="faq-item">
                <input type="checkbox" id="faq2" class="faq-toggle"/>
                <label for="faq2" class="faq-label">
                    <h5>What is intuitive eating?</h5>
                </label>
                <div class="faq-answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisl a eros gravida, in egestas urna vestibulum.</p>
                </div>
            </div>
            <div class="faq-item">
                <input type="checkbox" id="faq3" class="faq-toggle"/>
                <label for="faq3" class="faq-label">
                    <h5>How often should I exercise?</h5>
                </label>
                <div class="faq-answer">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula nisl a eros gravida, in egestas urna vestibulum.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


  )
}

export default Faq