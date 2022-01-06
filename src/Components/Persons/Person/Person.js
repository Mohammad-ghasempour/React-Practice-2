import React from 'react';
import styles from './Person.module.css'


const person= (props) => {


    

return(

    <div className={styles.Person} >
    <p onClick={props.click}>
     I'm  {props.name} and I am {props.age} years old!</p>
    <input type="text" onChange={props.changed}/>
    <h3>{props.children}</h3>
    </div>


)
}

export default person;