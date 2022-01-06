import React, { Component } from 'react';
//import Styles from './App.css';
import Styles from './App.module.css'
import UserInput from '../Components/Persons/Person/UserInput';
import UserOutput from '../Components/Persons/Person/UserOutput';
import ValidationComponent from '../Components/Persons/Person/ValidationComponent';
import CharComponent from '../Components/Persons/Person/CharComponent';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit.js'


class App extends Component {

  state = {
    persons: [
      { id: 'id1', name: 'Max', age: 28 },
      { id: 'id2', name: 'Manu', age: 29 },
      { id: 'id3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    username: 'Mohammad_ghasempour',
    showPersons: false,
    numberOfCharacter: []
  };

  deletePersonHandler = (personIndex)=>{
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p =>{
        return p.id=== id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    
    const persons = [...this.state.persons];
    persons[personIndex]= person;
    this.setState({ persons:persons})
    }

  changeUserOutput = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    }
    )
  }
  countCharacterNumber = (event)=>{

    this.setState({
      numberOfCharacter: event.target.value
    })
  }



  render() {

    let persons = null;
       if (this.state.showPersons) {
      persons =
        <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />
        }

 
    return (
      <div className={Styles.App}>
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
