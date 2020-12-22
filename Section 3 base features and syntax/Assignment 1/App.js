import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state ={
  username : [{name :"Osama"} , { name :"Elmi"}
 ]}

switchName = (newName) => {
this.setState( {
  username : [{name :"Amin"} , { name : newName}
 ] })}

   eventNameHandler = (event) => {
    this.setState( {
      username : [{ name : "Osama"} , {name : event.target.value}
    
 ]})
  }



  render() {
const styleBtn = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    }

return (
      <div className="App">
   <button style= {styleBtn}onClick =  {this.switchName.bind(this, 'Aman')}> Switch Name </button>
  <Person userName = {this.state.username[0].name} />
        <Person changed={this.eventNameHandler} userName = {this.state.username[1].name} />
        </div>
   ) 
  }
}

export default App;
