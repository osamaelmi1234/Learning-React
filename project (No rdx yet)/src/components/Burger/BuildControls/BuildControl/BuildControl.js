import React from 'react';
import Styles from './BuildControl.module.css';

const buildControl = props => (
  <div className={Styles.BuildControl}>

    <div className={Styles.Label}> {props.label} </div>
    <button onClick={props.subtracted} 
            className={Styles.Less} 
            disabled={props.disabled}> 
            Less 
    </button>
     <button onClick={props.added} className={Styles.More}> More </button> 
  
    </div>


);
export default buildControl;
