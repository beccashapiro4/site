import React from 'react';
import classes from './Portfolio.module.css';
import { Link } from 'react-router-dom';

// Image References: These refer to images in the Public/Assets folder (not main-level Assets)
const fish_sticks_3 = 'assets/img/portfolio/fish-sticks.png';
const The_Soup = 'assets/img/portfolio/The_Soup.png';
const Suits = 'assets/img/portfolio/Twins_1.png';
const Duet = 'assets/img/portfolio/Twins_2.png';
const YinYang = 'assets/img/portfolio/Twins_3.png';
const Worm_Guy = 'assets/img/portfolio/Butterfly_Man.png';
const iPhone = 'assets/img/portfolio/iPhone.png';
const Wormhole = 'assets/img/portfolio/Wormhole.png';
const Muze_Icons = 'assets/img/portfolio/Muze_Icons_Collection.png';
const Mothers_Day = 'assets/img/portfolio/Mothers_Day.png';
const The_Nun = 'assets/img/portfolio/The_Nun.png';
const Bird_In_Hand = 'assets/img/portfolio/Remotion/Bird_In_Hand_4.jpg';
const Finn = 'assets/img/portfolio/Finn_With_Sock.png';
const Poco = 'assets/img/portfolio/Poco.png';

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
                    <div className={`${classes.green} ${classes.rounded_rect}`} style={{ left: '62%', transform: 'translateY(8%)' }}>
                        <h1 className={classes.portfolio_header_1}>becca dot fish</h1>
                        <h2 className={classes.portfolio_header}>Writer.Artist.Designer</h2>
                        <img src={fish_sticks_3} className={classes.image} style={{ width: '100%', left: '-20%', top: '20%' }} />
                    </div>
                    <div className={`${classes.yellow} ${classes.rounded_rect}`} style={{ top: '25%' }}>
                        <img src={Suits} className={classes.image} style={{ width: '30%', left: 'auto', right: '10%', top: '-54%' }} />
                        <img src={The_Nun} className={classes.rounded_img} style={{ width: '60%', left: '10%', top: '10%' }} />
                    </div>
                    <div className={`${classes.perp} ${classes.rounded_rect}`} style={{ transform: 'translateY(-34%)', left: '40%' }}>
                        <img src={iPhone} className={classes.image} style={{ width: '95%', left: '-10%', top: '-20%' }} />
                        <img src={Muze_Icons} className={classes.image} style={{ width: '66%', left: '36%', top: '42%' }} />
                    </div>
                    <div className={`${classes.oranj} ${classes.rounded_rect}`} style={{ transform: 'translateY(8%)', left: '15%' }}>
                        <img src={Wormhole} className={classes.image} style={{ width: '100%', left: '-20%', top: '0%' }} />
                        <img src={YinYang} className={classes.image} style={{ width: '30%', left: '85%', top: '20%' }} />
                    </div>
                    <div className={`${classes.yellow} ${classes.rounded_rect}`} style={{ transform: 'translateY(36%)', left: '60%' }}>
                        <img src={Mothers_Day} className={classes.rounded_img} style={{ width: '85%', left: '-5%', top: '-5%' }} />
                        <img src={Duet} className={classes.image} style={{ width: '40%', left: '48%', top: '-73%' }} />
                    </div>
                    <div className={`${classes.green} ${classes.rounded_rect}`} style={{ transform: 'translateY(56%)', left: '5%' }}>
                        <img src={The_Soup} className={classes.rounded_img} style={{ width: '70%', left: '24%', top: '-40%' }} />
                    </div>
                    <div className={`${classes.yellow} ${classes.rounded_rect}`} style={{ transform: 'translateY(69%)', left: '30%' }}>
                        <img src={Bird_In_Hand} className={classes.rounded_img} style={{ width: '65%', left: '-10%', top: '20%' }} />
                        <img src={Worm_Guy} className={classes.image} style={{ width: '95%', left: '32%', top: '-65%' }} />
                    </div>
                    <div className={`${classes.perp} ${classes.rounded_rect}`} style={{ transform: 'translateY(104%)', left: '55%' }}>
                        <img src={Finn} className={classes.rounded_img} style={{ width: '60%', left: '55%', top: '-40%' }} />
                        <img src={Poco} className={classes.rounded_img} style={{ width: '55%', left: '-10%', top: '26%' }} />
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Portfolio;