import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "281e4621-23b6-4574-81ae-81d9b9a8c1ce");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());
      if (res.success) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am actively seeking opportunities as a React.js Frontend Developer. If you are looking for a passionate developer to join your team or have a project that needs a modern, responsive web solution, please get in touch. Recruiters and hiring managers are welcome to contact me regarding suitable roles or collaborations.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <a href="mailto:naga240324@gmail.com">naga240324@gmail.com</a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <a href="tel:+916383980415">+91 63839 80415</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Chennai, TamilNadu</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message here"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </div> 
    </div> 
  );
};

export default Contact;

//web3forms for email access key//
