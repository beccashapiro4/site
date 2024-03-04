import React from 'react';
import classes from './Portfolio.module.css';
//import fish_sticks from '.../assets/img/fish/Fish_Sticks.png';
import { Link } from 'react-router-dom';

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
                <div className="section" id="section-content">
                    <div className={`${classes.green} ${classes.rounded_rect}`} style={{ left: 'auto', right: '20px' }}>
                        <img src={'../assets/img/fish/fish_sticks.png'} style={{ width: 200 }} />
                    </div>
                    <div className={`${classes.yellow} ${classes.rounded_rect}`} style={{ top: '250px' }}></div>
                </div>
            </main>

        </div>
    );
};

export default Portfolio;