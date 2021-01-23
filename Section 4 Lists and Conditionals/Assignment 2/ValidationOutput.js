import React from 'react';
import './ValidationOutput.css';

const validationOutput = (props) => {

  if (props.length > 4) {
		return (
			<div className= "Sentence" onChange="change">
  <p>The length of the entered text [{props.name}] is [{props.length}] the length is Long Enough </p>
    </div>
	)
	} else {
		return (
       <div className= "Sentence" onChange="change">
  <p>The length of the entered text [{props.name}] is [{props.length}] the length is Too Short </p>
    </div>)
		
	}



}

export default validationOutput;