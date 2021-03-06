//Lists and Keys give state an id property line 11 and add key property iwth value of id Line 63

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
 
class App extends Component {
  
  state = {
   persons : [
  { id:"qw", name:"Osama", age: 23} , { id:"er", name:"Aman" , age: 15},  { id:"ty", name: "Amin" , age: 20}
  ] , 

  otherValue : "Some other value", 
  showPersons : false

  }
  
  deletePersonHandler = (personIndex) => {

// const persons = this.state.persons.slice();
 const persons = [...this.state.persons]
 persons.splice(personIndex, 1);
 this.setState({persons: persons})
  }

 nameHandlerChanged = (event) => {

  this.setState( { 
    persons: [
   
   { name: "Osama", age: 24} , {name:event.target.value , age: 22}, {name: "Amin" , age: 21}
             
             ]
    }
  )

 }
 togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons : !doesShow});

 }


  render() {
  //inline styles
    const styleBtn = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    }

    let people = null;
    if(this.state.showPersons) {
         people =  ( <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            name={person.name} age={person.age}
            click={() => this.deletePersonHandler(index)} 
            key={person.id}
            />
          })}
        
        </div> );
    }
    return (
      <div className="App">
        <h1>"Hi, I'm a React App" </h1>
        <p> Does this work now </p>
        <button style={styleBtn} onClick = {this.togglePersonsHandler}>Button</button>
         {people}
        </div>
    ); 
   
  
  
  }
}

export default App;
