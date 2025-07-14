import React, { useState } from "react";
import "./Connect.css";
import mail from "../../assets/mail.png";
import phone from "../../assets/Phone.png";
import Marker from "../../assets/Marker.png";
const Connect = () => {
  const [success, setSuccess] = useState(false);

  const handleClose = () => setSuccess(false);


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "38f2bfe6-6486-4a6d-8ac0-8d2c5139a769");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setSuccess(true);
      event.target.reset(); 
      console.log("Success", res);
 
    }
  };

  return (
    <div id="connect" className="connect">
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
        {success && (
    <div className="modal">
          <div className="modal-content">
    <button className="modal-close" onClick={handleClose}>×</button>
          
    <p>Thank you! Your message was sent</p>
    </div>
  </div>
)}
        <form onSubmit={onSubmit} className="connect-context-right">
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
          <button type="submit" className="connect-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
