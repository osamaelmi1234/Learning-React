import React from 'react';
import './CharComponent.css'
const charComponent = (props) => {
 
return (
<div className="char">
<p> Letter at index {props.index} is {props.name}</p>
</div>
)
}




export default charComponent;