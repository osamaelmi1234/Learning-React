import React , {Component} from 'react';
import Styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
render() {

let ingredient = null;
switch(this.props.type) {
	case('bread-bottom'): 
	 ingredient = <div className={Styles.BreadBottom}> </div>;
	 break;

	case('bread-top'):
	ingredient = (
	<div className={Styles.BreadTop}>
	  <div className={Styles.Seeds1}></div>
	  <div className={Styles.Seeds2}></div>
	</div>
  );
  break;

  case('meat'): 
  ingredient = <div className={Styles.Meat}></div>;
  break;
  
  case('cheese'): 
  ingredient = <div className={Styles.Cheese}></div>;
  break;
  
  case('salad'): 
  ingredient = <div className={Styles.Salad}></div>;
  break;
  
  case('chicken'): 
  ingredient = <div className={Styles.Chicken}></div>;
  break;
  
  default: ingredient = null;
  }
  return ingredient;
}}
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}
export default BurgerIngredient;