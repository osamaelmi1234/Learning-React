 Using map Method to Output List Line 66
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
  
  switchNameHandler = (newName) => {
    //console.log( "Was switched");
    // DONT DO THIS this.state.persons[0].age = "24"
    this.setState( { 
    persons: [
    { name:newName, age: 24} , {name:"Abdi" , age: 22}, {name: "Amin" , age: 21}
             
             ]
    }
  )
  
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
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          })}
        // This is equal to writing <Person name={this.state.persons[0].name age={this.state.persons[0].age}/>
                                    <Person name={this.state.persons[1].name age={this.state.persons[1].age}/>
                                    <Person name={this.state.persons[2].name age={this.state.persons[2].age}/>
                                     
                                    
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
