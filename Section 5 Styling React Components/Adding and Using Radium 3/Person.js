// Adding css to Person.js use classname instead of class and link import css './Person.css' to give it  css styles

import React from 'react';
import './Person.css';

const person = (props) => {
	return (
<div className = "Person">
	<p onClick = {props.click}> I am {props.name} and I am {props.age} years old! </p>
     <p> {props.children} </p>
     
  <p>The length of the entered text below is  </p>
    
     <input type="text" onChange ={props.changed} value = {props.name}/>
</div>
)

}

export default person;