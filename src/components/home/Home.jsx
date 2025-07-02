import React from 'react';
import "./home.css";
import Me from "../../assets/avatar-lg.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className='intro'>
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Leoul Gashaw</h1>
        <span className="home__education">I'm a Data Professional</span>

        <HeaderSocials />

        <a
        href="#contact"
        className="btn"
        style={{
            position: 'relative',
            zIndex: 9999,
            backgroundColor: 'red',
            color: 'white',
            padding: '10px 20px',
            display: 'inline-block',
            cursor: 'pointer'
        }}
        >
        Let's Talk
        </a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
