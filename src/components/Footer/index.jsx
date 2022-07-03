import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gap-y align-items-center bottom-custom">
          <img className='column-custom left-custom' src={'assets/img/heads/heads-footer-1.PNG'} />
          <ul className="nav nav-primary nav-hero custom-column middle-custom">
            <li className="nav-item">
              <a className="nav-link" href="/">Emptyheads LLC</a>
            </li>
          </ul>
          <img className='column-custom right-custom' src={'assets/img/heads/heads-footer-2.PNG'} />

        </div>
      </div>
    </footer>
  )
}

export default Footer;