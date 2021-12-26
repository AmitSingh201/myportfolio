import React from "react";
import "./Contact.css";
import Call from "../../assets/Home/phone-volume-solid.svg";
import Address from "../../assets/Home/address-card-solid.svg";
import Mail from "../../assets/Home/envelope-square-solid.svg";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5upmnkm",
        "template_c1lz1zm",
        formRef.current,
        "user_vY4HLVRgaiw33lRNh9YAj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's discuss Your Project</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Call} alt="" className="contact-icon" />
              +91 9920355820
            </div>
            <div className="contact-info-item">
              <img src={Address} alt="" className="contact-icon" />
              Manormanagar near shankar manider Thane(W)
            </div>
            <div className="contact-info-item">
              <img src={Mail} alt="" className="contact-icon" />
              amitsingh16789@gmail.com
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-decs">
            <strong>Lorem ipsum dolor</strong> sit amet consectetur adipisicing
            elit. Ea dolor illo quasi iusto hic libero ad molestias sequi,
            cupiditate earum incidunt sapiente provident? Mollitia odio amet
            vero nemo, dolore vel?
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="User_name" />
            <input type="text" placeholder="subject" name="User_subject" />
            <input type="text" placeholder="email" name="User_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
