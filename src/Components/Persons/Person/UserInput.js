import React from "react";

const userInput = (props) =>{
    const inputstyle = {
        border: '1px solid red',
        cursor: 'pointer'
      }

    return(
        <input  style={inputstyle} type="text" value={props.inputvalue} onChange={props.reference}/>
    );
    
}

export default userInput;