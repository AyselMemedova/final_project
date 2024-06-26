import React from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    Toastify({
      text: "Email send",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
    e.preventDefault();

    emailjs
      .sendForm("service_k9ok88l", "template_5jpu07g", form.current, {
        publicKey: "4wYggf1amM7g7MSW3",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="contact_all">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contant_top">
                <h3>Get in Touch</h3>
                <p>
                  Contact us and solve any problem you want, ask any question.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_main">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                <div className="contact_left_top">
                  <h2>Contact</h2>
                  <div class="contact-info">
                    <span>Tel: 123-456-7890</span>
                    <div class="separator"></div>
                    <span>info@my-domain.com</span>
                  </div>
                </div>

                <div className="contact_left_form">
                  <form class="contact-form" ref={form} onSubmit={sendEmail}>
                    <div class="form-row">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="user_name"
                        id="user_name"
                      />
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div class="form-row">
                      <input
                        type="email"
                        placeholder="Email"
                        name="user_email"
                        id="user_email"
                      />
                      <input type="tel" placeholder="Phone" />
                    </div>
                    <div class="form-row" style={{width:"400px"}}>
                      <textarea
                        rows="3" cols={"70"}
                        placeholder="Type your message here..."
                        name="message"
                        id="message"
                      ></textarea>
                    </div>
                    <input type="submit" className="submit" value="Send" />
                  </form>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12 xerite">
                <p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6078.98293374492!2d49.83955869383855!3d40.37579890735384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e01!2sCode%20Academy!5e0!3m2!1sen!2saz!4v1718045359392!5m2!1sen!2saz"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;