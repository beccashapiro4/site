import React, { Component, useState } from 'react';
import classes from './CFF_Cocktail.module.css';
import { Link } from 'react-router-dom';

// Image References: These refer to images in the Public/Assets folder (not main-level Assets)
const background = 'assets/img/fish/BLANK.png';

class CFF_Coctail extends Component {
    state = {
        cocktail: 'Cocktail Name',
        ingredient_1: 'Ingredient 1',
        ingredient_2: 'Ingredient 2',
        ingredient_3: 'Ingredient 3',
        ingredient_4: 'Ingredient 4',
        ingredient_5: 'Ingredient 5',
        ingredient_6: 'Ingredient 6'
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ ...this.state, [name]: value })
    };

    handleSubmit = (event) => {
        alert('A cocktail was submitted: ' + this.state);
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <main className="main-content">
                    <div className={classes.cocktail_body}>
                        <form className={classes.cocktail_form} onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                                <br />
                                <input
                                    type="text"
                                    name='cocktail'
                                    value={this.state.cocktail}
                                    onChange={this.handleChange} />
                            </label>
                            <label>
                                First Ingredient:
                                <br />
                                <input
                                    type="text"
                                    name='ingredient_1'
                                    value={this.state.ingredient_1}
                                    onChange={this.handleChange} />
                            </label>
                            <label>
                                Second Ingredient:
                                <br />
                                <input
                                    type="text"
                                    name='ingredient_2'
                                    value={this.state.ingredient_2}
                                    onChange={this.handleChange} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                        <div className={classes.cocktail_drink} >{this.state.cocktail}</div>
                        <div className={`${classes.ingredient} ${classes.ing1}`}>{this.state.ingredient_1}</div>
                        <div className={`${classes.ingredient} ${classes.ing2}`}>{this.state.ingredient_2}</div>
                        <img src={background} className={classes.image} />

                    </div>
                </main>

            </div>
        );
    };
};

export default CFF_Coctail;