import React , {useEffect} from 'react';
import Styles from './Cockpit.module.css';

const Cockpit = (props) => {

useEffect(() => {
	console.log('[Cockpit.js] useEffect');
	return () => {
		console.log('[Cockpit.js] cleanup work in useEffect')
		/* cleanup effect happens after component is destroyed to know when cleanup effect takes place look at the seconf parameter of useEffect
		  */
	}
	
},[]) 
 
	const classes = [];
   let btnClass = [Styles.Button];

   if(props.showPersons) {
   	btnClass.push(Styles.Red);
   }

    if(props.persons.length <= 2 ) {
      classes.push(Styles.Red)     /// classes = ['red']
    }
   if(props.persons.length <=1) {
    classes.push(Styles.Bold)  /// classes = ['red', 'bold']
   }
   
   let classesJoined = classes.join(" ");

	return (
		<div className={Styles.Cockpit}>
<h1>{props.title} </h1>
        <p className={classesJoined}> Does this work now </p>
   <button className={btnClass.join(" ")} onClick ={props.clicked}>Button </button>
     </div>
	)
}


export default Cockpit