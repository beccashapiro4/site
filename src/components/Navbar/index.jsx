import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="custom-nav vertical">
      <div className="container">
        <div className="left-side">
          <Link className="top-logo" to="/">
            <img className="logo-default" src={`${process.env.PUBLIC_URL}/assets/img/fish/fish-logo.png`} alt="logo" />
          </Link>
          <ul className="vertical">
            <li className="vertical">
              <Link className='nav-link' to="/about">About</Link>
            </li>
            <li className="vertical">
              <a className='nav-link' href={`${process.env.PUBLIC_URL}/assets/pdf/Portfolio.pdf`}>Portfolio</a>
            </li>
            <li className="vertical">
              <a className='nav-link' href="mailto:danishapiro4@gmail.com">Email</a>
            </li>
            <li className='vertical'>
              <a className='nav-link' href="https://instagram.com/fish_stick_lava_lamp/">Instagram</a>
            </li>
            <li className='vertical'>
              <a className='nav-link' href="https://worm-time.dani.fish">What's The Time?</a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}

export default Navbar;