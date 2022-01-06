import React from 'react';
import './Output.css';

const userOutput = (props)=>{
    return(
<div className='Output'>
    <p>Paragraph 1 {props.username}</p>
    <p onChange={props.changeuser}>Paragraph 2</p>
</div>
    )
}

export default userOutput;