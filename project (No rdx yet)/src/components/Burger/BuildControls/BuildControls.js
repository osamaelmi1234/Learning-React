import React from 'react';
import Styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [

{label: 'Salad', type: 'salad'},
{label: 'Chicken', type: 'chicken'},
{label: 'Meat', type: 'meat'},
{label: 'Cheese', type: 'cheese'},
];

const buildControls = props => (

  <div className={Styles.BuildControls}>
  <p>Current Price: <strong>£{props.price.toFixed(2)} </strong> </p>
    {controls.map(ctrl => (
    	<BuildControl key={ctrl.label} label={ctrl.label} 
    	added={() => props.ingredientAdded(ctrl.type)}
        subtracted={() => props.ingredientSubtracted(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
    	/>
    ))}
    <button className={Styles.OrderButton}
            disabled={!props.purchaseable}
             onClick={props.ordered}
            >ORDER NOW</button>
  </div>


);


export default buildControls;