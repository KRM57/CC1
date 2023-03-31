import React from 'react';
import './day2.css';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <h4>Reach Us</h4>
        <p>Kuniyamuthur</p>
        <p>Coimbatore-641005</p>
        
        <p>Email: Skcet@company.com</p>
      </div>
      <div className="social">
        <h4>Contact Us</h4>
        <ul>
          <a href="#">Facebook</a><br></br>
          <a href="#">Twitter</a><br></br>
          <a href="#">Instagram</a><br></br>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;