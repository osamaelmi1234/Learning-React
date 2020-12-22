import React from 'react';
import './Person.css'

const UserOutput = (props) => {
  return (

<div className ="twoPara">
<p>"Indeed, the Blazers have balanced things very nicely this time around - the pricey players are the best ones, the good youngsters have team control, there are no wantaway players, and there is progression potential in both the short and medium terms." </p>
<p>"When {props.userName} went to ownership to ask what they could do for him, he was making a point: I need more,and in turn, he gave more, becoming even better as a scorer and shooter while also improving his defence that was once so poor. He became an excellent all-around player that could foreseeably be the best player on a championship team."</p>
<p>{props.children}</p>
<input type="text"  onChange={props.changed} value={props.userName} />
  </div>

)}

export default UserOutput