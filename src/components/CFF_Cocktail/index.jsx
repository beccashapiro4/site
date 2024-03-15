import React from 'react';
import classes from './CFF_Cocktail.module.css';
import { Link } from 'react-router-dom';

// Image References: These refer to images in the Public/Assets folder (not main-level Assets)
const background = 'assets/img/fish/BLANK.png';

const CFF_Coctail = () => {
    return (
        <div>
            <main className="main-content">
                <div className={classes.cocktail_body}>
                    <div className={classes.cocktail_drink} >Cocktail Name, Cocktail Name</div>
                    <div className={`${classes.ingredient} ${classes.ing1}`}>Ingredient 1</div>
                    <div className={`${classes.ingredient} ${classes.ing2}`}>Ingredient 2</div>
                    <img src={background} className={classes.image} />
                </div>
            </main>

        </div>
    );
};

export default CFF_Coctail;