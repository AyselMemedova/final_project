import React from 'react'
import "./Contact.css"
import { Helmet } from 'react-helmet'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className='contact_all'>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="contant_top">
                                <h3>Get in Touch</h3>
                                <p>
                                    Contact us and solve any problem you want, ask any question.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12" data-aos="fade-up"
                                data-aos-duration="3000">
                                <div className='contact_left_top'>
                                    <h2>Contact</h2>
                                    <div class="contact-info">
                                        <span>Tel: 123-456-7890</span>
                                        <div class="separator"></div>
                                        <span>info@my-domain.com</span>
                                    </div>
                                </div>

                                <div className="contact_left_form">
                                    <form class="contact-form" />
                                    <div class="form-row">
                                        <input type="text" placeholder="First Name" name="first-name" />
                                        <input type="text" placeholder="Last Name" name="last-name" />
                                    </div>
                                    <div class="form-row">
                                        <input type="email" placeholder="Email" name="email" />
                                        <input type="tel" placeholder="Phone" name="phone" />
                                    </div>
                                    <div class="form-row">
                                        <textarea placeholder="Type your message here..." name="message"></textarea>
                                    </div>
                                    <button type="submit" className='submit'>Submit</button>

                                    <form />
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6078.98293374492!2d49.83955869383855!3d40.37579890735384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2saz!4v1718045359392!5m2!1sen!2saz" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact