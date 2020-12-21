import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  state = {
   persons : [
  { name:"Osama", age: 23} , {name:"Aman" , age: 15},  {name: "Amin" , age: 20}
  ] , 

  otherValue : "Some other value"

  }
  
  switchNameHandler = () => {
  	//console.log( "Was switched");
  	// DONT DO THIS this.state.persons[0].age = "24"
  	this.setState( { 
    persons: [
   
   { name:"Osama", age: 24} , {name:"Aman" , age: 15}, {name: "Amin" , age: 21}
             
             ]
  	}
  )
  
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p> Does this work now </p>
        <button onClick = {this.switchNameHandler}> Switch Name </button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person  name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My Hobbies: Playing Games </Person>
        <Person name =  {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      </div>
    ); 
   
  
  
  }
}

export default App;
