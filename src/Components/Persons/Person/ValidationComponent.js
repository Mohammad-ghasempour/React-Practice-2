import React from "react";

const validationComponent = (props)=>{
    return ( <div>
        {
    props.inputLength < 5 ?
    <p>Text too short!</p> : <p>Text long enough.</p>
        }
    </div>)
}
export default validationComponent;