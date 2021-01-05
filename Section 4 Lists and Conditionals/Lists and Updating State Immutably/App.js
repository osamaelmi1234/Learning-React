//Lists and Updating State immutably Line 20 and line 55
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
 
class App extends Component {
  
  state = {
   persons : [
  { name:"Osama", age: 23} , {name:"Aman" , age: 15},  {name: "Amin" , age: 20}
  ] , 

  otherValue : "Some other value", 
  showPersons : false

  }
  //personIndex is equal to index that was passed as a argument in the deletePersonHandler function for the click property in <Person who passes the index as the argument Line 61
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
