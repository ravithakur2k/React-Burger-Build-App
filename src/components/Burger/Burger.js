import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient';
// import {withRouter} from 'react-router-dom';

const burger = (props) => {
    let transformedIngredients;
    if(Object.keys(props.ingredients).length > 0){
        transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }).reduce((arr,el) => {
            return (
                arr.concat(el)
            );
        });
    }else {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;