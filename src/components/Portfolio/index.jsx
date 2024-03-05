import React from 'react';
import classes from './Portfolio.module.css';
//import fish_sticks from '.../assets/img/fish/Fish_Sticks.png';
import { Link } from 'react-router-dom';

// Image References
const Fish_Sticks = "https://lh3.googleusercontent.com/pw/AP1GczNgAuaqwSLSrXmIYv6zKqscJvdADn0tq6cqGq6GOGSyP4CA4SrGGdq16IjsfxKzoK91uVj2JXsZyAW37fpCqCaFxKhpk4TbNiDuxW1omGMit0BA1nUw=w2400";
const The_Soup = "https://lh3.googleusercontent.com/pw/AP1GczOmQPUJ76hg4_WrVSwWeMRUfQlszKmFXRTAnYIJWfYXhGxxq6AOKaPLaRKPMQELqeiDl_Y8MiNmuKXmnSYIiqEy5ySeTfw1w8I5uh7rkzgcDm0jwjD9=w2400";
const Suits = "https://lh3.googleusercontent.com/pw/AP1GczPeOkwjLRRF90zkc8_F1xuZqDKZQob9tjSjIuO9GCA14YXs0r9Jpq3LwHVEINgOC7zkGMIKazWyBpgoNLX3bbx2t3TRS_2MfXpa1EAD_Bn2qIE__M_0=w2400";
const Worm_Guy = "https://lh3.googleusercontent.com/pw/AP1GczPRC-3YvD_-3ofjiFYk9mPoDB-KWLKgZ4qrIcgkZW5fQYie6dg97mI5mDFAtP6iUTea41MfBl8k6BMa6vuzg77rAzH_Pgn0LpcVIuSOY6w7oFbVjbnA=w2400";
const iPhone = "https://lh3.googleusercontent.com/pw/AP1GczMu7sINh0qr0weNjWWUWpmvWrhgwpkFNYhEXBfA5nAiGMzgT-KD_Ip8TYlFhuzXqeeqmdf2dtrg6ygm0RPGLsKmu9qUUdoC6g-9goyKuhVkGaI6MWKs=w2400";

/*
function Rounded_Rect({ left = 'auto', right = 'auto', top = 'auto', width = '369', color }) {
    return (
        <div
            className={
                `${classes.green} ${classes.rounded_rect}`}
            style={
                {
                    width: { width },
                    top: { top },
                    right: { right },
                    backgroundColor: { color }
                }}>
        </div>
    );
};
*/

const Portfolio = () => {
    return (
        <div>
            <main className="main-content">
                <div className={classes.portfolio_body}>
                    <div className={`${classes.green} ${classes.rounded_rect}`} style={{ left: 'auto', right: '20px' }}>
                        <img src={Fish_Sticks} className={classes.image} style={{ width: '100%', left: '-20%', top: '20%' }} />
                    </div>
                    <div className={`${classes.yellow} ${classes.rounded_rect}`} style={{ top: '25%' }}>
                        <img src={Suits} className={classes.image} style={{ width: '30%', left: 'auto', right: '10%', top: '-50%' }} />
                        <img src={The_Soup} className={classes.rounded_img} style={{ width: '60%', left: '10%', top: '10%' }} />
                    </div>
                    <div className={`${classes.perp} ${classes.rounded_rect}`} style={{ top: '40%', left: '40%' }}>
                        <img src={iPhone} className={classes.image} style={{ width: '80%', left: '10%', top: '0%' }} />
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Portfolio;