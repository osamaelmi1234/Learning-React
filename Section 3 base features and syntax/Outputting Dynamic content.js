import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        <p> Does this work now </p>
        <Person name="Osama" age="23"/>
      </div>
    ); 
   
  /// return React.createElement('div' , {className: 'App'} , React.createElement('h1' , null , 'Does this work now?')) rendersv h1 with added css class 'App' */}
  
  }
}

export default App;
