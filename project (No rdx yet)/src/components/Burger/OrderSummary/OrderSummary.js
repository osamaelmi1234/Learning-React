import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
     // This could be a functional component , doesnt have to be a class
     
     componentDidUpdate() {
          console.log('[OrderSummary] did update')
     }


     render()  {
        const ingredientSummary = Object.keys(this.props.ingredients)
     .map((igKey, index) =>  {

          return <li key={igKey + index}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]} </li>
     });


          return ( 

     <Aux> 
     <h3>Your Order</h3>
     <p> A delicious burger with the following ingredients: </p>
     <ul>
      {ingredientSummary}
     </ul>
     <p><strong>Total Price: £{this.props.price.toFixed(2)} </strong></p>
     <p> Continue to Checkout? </p>
     <Button btnType="Danger" click={this.props.purchaseCancelled}>CANCEL</Button>
     <Button btnType="Success"  click={this.props.purchaseContinued}>CONTINUE</Button>
     </Aux> );
     


	}


}

export default OrderSummary;