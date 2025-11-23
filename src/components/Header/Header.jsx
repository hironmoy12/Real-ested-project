import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
function Header() {
  return (
    <header className="hero">
      {/* Top Navigation */}
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="Catalpa Realty" />
        </div>

        <nav className="menu">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Projects</a>
          <a href="#">Contact Us</a>
          <a href="#">Blog</a>
          <a href="#">Gallery</a>
        </nav>
      </div>

      {/* Main Hero Content */}
      <div className="hero-content">
        {/* Left Area */}
        <div className="left">
          {/* <div className="phone-box">
            <i className="fa fa-phone"></i> +1 910-626-85255
          </div> */}

          <h1>
            Discover Your Dream  <br /> HOME TODAY
          </h1>

          <p>
        Click the edit button to change this text. This is placeholder content meant to be replaced with your own description.
          </p>

          <button className="contact-btn">Contact Us</button>
        </div>

        {/* Right Area: Contact Form */}
        {/* <div className="right-form">
          <h5>NEED HELP?</h5>
          <h2>MESSAGE US</h2>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Message"></textarea>

          <button className="send-btn">Send Message</button>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
