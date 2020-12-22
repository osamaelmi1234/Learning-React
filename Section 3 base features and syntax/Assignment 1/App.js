Instructions are:

UserInput should hold an input element, UserOutput two paragraphs
Output multiple UserOutput components in the App component (any paragraph texts of your choice)
Pass a username (of your choice) to UserOutput via props and display it there
Add state to the App component (=> the username) and pass the username to the UserOutput component
Add a method to manipulate the state (=> an event-handler method)
Pass the event-handler method reference to the UserInput component and bind it to the input-change event
Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets

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
