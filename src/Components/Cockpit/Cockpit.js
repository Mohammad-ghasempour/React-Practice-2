import React from 'react';
import Styles from './Cockpit.module.css';

const cockpit = (props) => {

    let assignedClasses = [];
    let btnClass = '';
    if (props.showPersons){
        btnClass = Styles.Red;
        console.log(btnClass);
    }

    if (props.persons.length<=2){
      assignedClasses.push(Styles.red);
    }
    if (props.persons.length<=1){
      assignedClasses.push(Styles.bold);
    }

    return (
        <div className={Styles.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={props.clicked}>Toggle persons</button>
          </div>
    );
}

export default cockpit;