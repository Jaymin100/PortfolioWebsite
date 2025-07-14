import React from "react";
import "./Connect.css";
import mail from "../../assets/mail.png";
import phone from "../../assets/Phone.png";
import Marker from "../../assets/Marker.png";
const Connect = () => {
  return (
    <div className="connect">
      <div className="connect-title">
        <h1>Connect with Me</h1>
      </div>
      <div className="connect-section">
        <div className="connect-context-left">
          <h1> Reach out</h1>
          <p>
          
            Currently looking for any fun projects to work on that will have
            real world use! You can contact me anytime.
          </p>
          <div className="connect-details">
            <div className="connect-detail">
            <img src={mail} />
            <p>jayminswedlund1@gmail.com</p>
            </div>
            <div className="connect-detail">
            <img src={phone} />
            <p>952-393-9744</p>
            </div>
             <div className="connect-detail">
            <img src={Marker} />
            <p>MN, Minneapolis</p>
            </div>
          </div>
        </div>

        <form className="connect-context-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Your Email" required />
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>
          <btn type="submit" className="connect-submit">Submit Now</btn>
        </form>
      </div>
    </div>
  );
};

export default Connect;
