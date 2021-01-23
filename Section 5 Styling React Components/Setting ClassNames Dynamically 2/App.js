//Line 73 - 80 setting classnames dynamically so to items makes text red , 1 item makes text red and bold
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

 nameHandlerChanged = (event, id) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id
})
const person = {...this.state.persons[personIndex]};

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

this.setState({persons:persons})

}
 togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons : !doesShow});

 }


  render() {
  //inline styles
    const styleBtn = {
      backgroundColor:'green',
      color: 'white',
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
            changed={(event) => this.nameHandlerChanged(event, person.id)}
            />
          })}
        
        </div> );
        styleBtn.backgroundColor = 'red';
    }
    const classes = [];
    if(this.state.persons.length <= 2 ) {
      classes.push('red') 
    }
   if(this.state.persons.length <=1) {
    classes.push('bold')
   }
   let classesJoined = classes.join(" ");
    return (
      <div className="App">
        <h1>"Hi, I'm a React App" </h1>
        <p className={classesJoined}> Does this work now </p>
        <button style={styleBtn} onClick = {this.togglePersonsHandler}>Button</button>
         {people}
        </div>
    ); 
   
  
  
  }
}

export default App;
