import React , {useEffect} from 'react';
import Styles from './Cockpit.module.css';

const Cockpit = (props) => {

useEffect(() => {
	console.log('[Cockpit.js] useEffect');
	/* function called every time page is rendered
       useEffect is a React Hook, its CompondentDid UpDate and ComponentDidMount in one effect
       can use other important lifecycle hooks other than getderivedstateprops , it can send HTTP Requests    
           */
},[]) /*pass empty arrat if you want useEffect to only run one time in the beggining , or pass in when you want useEffect when a vairable of yours changes such as props.person   */
 
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