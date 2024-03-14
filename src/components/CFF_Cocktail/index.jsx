import React from 'react';
import classes from './CFF_Cocktail.module.css';
import { Link } from 'react-router-dom';

// Image References: These refer to images in the Public/Assets folder (not main-level Assets)
const background = 'assets/img/fish/BLANK.png';

const CFF_Coctail = () => {
    return (
        <div>
            <main className="main-content">
                <h2 classname={classes.cocktail_drink} >Cocktail Name, Cocktail Name, Cocktail Name</h2>
                <img src={background} className={classes.image} />
            </main>

        </div>
    );
};

export default CFF_Coctail;