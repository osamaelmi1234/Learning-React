import React from 'react';
import Styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  console.log(props)
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
  	return [...Array(props.ingredients[igKey])].map((t, index) => {
  		return <BurgerIngredient key={igKey + index} type={igKey}/>;
  	})
  }).reduce((arr,el) =>  {
          return arr.concat(el)
  }, [])

  console.log(transformedIngredients);
  if(transformedIngredients.length == 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  
	return (
      
      <div className={Styles.Burger}>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
      </div>

	);
}

export default burger;