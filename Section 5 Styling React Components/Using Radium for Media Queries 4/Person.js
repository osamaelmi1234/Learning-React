// Adding css to Person.js use classname instead of class and link import css './Person.css' to give it  css styles

import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
	const style = {
		'@media (min-width:500px)' : {
           width: '450px'
		}
	}
	return (
<div className = "Person" style={style}>
	<p onClick = {props.click}> I am {props.name} and I am {props.age} years old! </p>
     <p> {props.children} </p>
     
  <p>The length of the entered text below is  </p>
    
     <input type="text" onChange ={props.changed} value = {props.name}/>
</div>
)

}

export default Radium(person);