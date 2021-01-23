import React, { Component } from 'react';
import './App.css';
import ValidOutput from './Person/ValidationOutput';
import CharComponent from './CharComponent'

class App extends Component {
	state = {
	text: [{ enteredtext: "Osama",
     lengthOfText: 5}],
     
	}


 
outputText = (event) => {
 this.setState({
 	text: [{
 		enteredtext: event.target.value,
 		lengthOfText: event.target.value.length
 	}] ,
 	
 })
}

  render() {
 let targetText = this.state.text[0].enteredtext;
 let targetTextSplit = targetText.split("")
 console.log(targetTextSplit)

  /*targetTextSplit.map((letter, index) => {
 	if((/[a-zA-Z]/).test(letter) === true) {
 		return <CharComponent name="letter" index="index"/>
 	}
 }) */

const styleInput = {
	margin:" 0 auto",
	position :"relative",
     top:"200px",
    display:"block"
}
   return (
      <div className="App">
    <ValidOutput length={this.state.text[0].lengthOfText} name={this.state.text[0].enteredtext}/>
     <input style={styleInput} type="text" onChange={this.outputText} value={this.state.text[0].enteredtext}/>
   <div>
   {targetTextSplit.map((letter, index) => {
 	if((/[a-zA-Z]/).test(letter) === true) {
 		return <CharComponent name={letter} index={index}/>
 	}
 })}
   </div>
    </div>
    )
    
}

}
export default App;
