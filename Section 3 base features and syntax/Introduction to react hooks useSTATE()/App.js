import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

 const App = props => {
  
  const [personState , setPersonState] = useState({
   persons : [
  { name:"Osama", age: 23} , {name:"Aman" , age: 15},  {name: "Amin" , age: 20}
  ] , 

  otherValue : "Some other value"

  }
  ); 

const switchNameHandler = () => { setPersonState( { 
    persons: [
   
   { name:"Osama", age: 24} , {name:"Aman" , age: 15}, {name: "Amin" , age: 21}
             
             ], 

  otherValue: personState.otherValue

  	}
  )
  // In React hooks when manipulating the state , you have to manually add other objects such as otherValue as  setting state in hooks replaces the previous state where as in class bassed components, you  merge the contents so you dont have to manually add othervalue object 
  }

   
   return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p> Does this work now </p>
        <button onClick = {switchNameHandler}> Switch Name </button>
        <Person name = {personState.persons[0].name} age = {personState.persons[0].age}/>
        <Person  name = {personState.persons[1].name} age = {personState.persons[1].age}>My Hobbies: Playing Games </Person>
        <Person name =  {personState.persons[2].name} age = {personState.persons[2].age}/>
      </div>
    );
   
  }

export default App;

