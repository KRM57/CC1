import React from 'react';
import './day2.css';

function Header() {
  return (
    <header>
    <h2 id='title'>NEWTON ELECTRONICS</h2><br></br>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Cl1HuY2epdAAvig4zqq0GKXGkOJ4z2ZNkw&usqp=CAU"/>
      
      <nav class="topnav">
      
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        
      </nav>
    </header>
  );
}

export default Header;