import React from 'react';

function Greeter(props){

    return (
    <>
    <h1>Welcome back, {props.name}. Age = {props.age}, sID = {props.age}</h1>
    <button onClick={() => alert("Hello!")}>Click Me</button>
    </>
    )
}

export default Greeter; 