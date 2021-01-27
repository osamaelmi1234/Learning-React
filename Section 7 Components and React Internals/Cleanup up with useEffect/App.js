import React, { Component } from 'react';
import Styles from './App.module.css';
import PersonsList from './PersonsList';
import Cockpit from './Cockpit';

 
class App extends Component {
  constructor(props) {
    super(props);
  }
  
  state = {
   persons : [
  { id:"qw", name:"Osama", age: 23} , { id:"er", name:"Aman" , age: 15},  { id:"ty", name: "Amin" , age: 20}
  ] , 

  otherValue : "Some other value", 
  showPersons : false,
  showCockpit : true

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
  
   let people = null;

   let btnClass = [Styles.Button];
    if(this.state.showPersons) {
      
       people =  ( <div>
          <PersonsList persons={this.state.persons}
               clicked={this.deletePersonHandler}
               changed={this.nameHandlerChanged} />
                
        </div> );
       
        btnClass.push(Styles.Red);
    }
    const classes = [];
    if(this.state.persons.length <= 2 ) {
      classes.push(Styles.Red)     /// classes = ['red']
    }
   if(this.state.persons.length <=1) {
    classes.push(Styles.Bold)  /// classes = ['red', 'bold']
   }
   
    return (
    
      <div className={Styles.App}>
      <button 
      onClick= {() => {
        this.setState({ showCockpit: false});
      }}
      > 
      Remove Cockpit </button>
        
        {this.state.showCockpit ? ( <Cockpit showPersons={this.state.showPersons}
                 persons={this.state.persons}
                 clicked={this.togglePersonsHandler}
                 title={this.props.appTitle}
                 />) : null }
    {people}
        </div>
        
    ); 
   
  
  
  }
}

export default App;