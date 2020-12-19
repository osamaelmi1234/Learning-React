import React, { Component } from 'react';
import './App.css';


class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App </h1>
        
      </div>
    ); 
   /// return React.createElement('div' , null , 'h1' , 'Hi i am React App!!!');  gives h1Hi am a React App!!! doesnt render H1 nor add css class 'App'
  // return React.createElement('div' , {className: 'App'} , React.createElement('h1' , null , 'Does this work now?')) rendersv h1 with added css class 'App' */}
  
  }
}

export default App;
