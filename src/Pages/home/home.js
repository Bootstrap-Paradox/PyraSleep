import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

// Css
import './home.css';

// Image
import man_with_fire from '../../Asset/man_with_fire.svg';

const Home = () => {

  const tempParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const height = window.innerHeight - 150;



  return (
    <div>
  <div className="container-fluid home-page">


  <div className="home-section-1" style={{height: height}} >
    <img className="moonlight" src={man_with_fire}></img>
    <div className="CTA-section">
    <h1>We are Humans,<br/>Lets be One.</h1>
    <Link to="/calculate"><button>Calculate</button></Link>
    </div>
  </div>


  <section className=" home-section-2">

    <article className="sleep-info container">
    <div>
      <h2>What is Sleep Exactly?</h2>
      <p>{tempParagraph}</p>
      </div>
    </article>

  </section>


  </div>
</div>
  );
}

export default Home;
