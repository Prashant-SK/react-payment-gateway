import React from 'react';

function Greeter(props){
    const greet = () => {
        alert(`Hello there, ${props.name}`)
    }
    return (
    <>
    <h1>Welcome back, {props.name}. Age = {props.age}, sID = {props.age}</h1>
    <button onClick={greet}>Click Me</button>
    </>
    )
}

export default Greeter; 