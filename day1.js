import React from "react";

const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const console_ =()=>{
    alert("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push('u');
    console.log(myarray);
}
export default function Day1() {
  return (
    <div>
    <button onClick={alertBox}>Click Me</button>
    <button onClick={console_}>Click Me</button>
    <button onClick={check}>click me</button>
    </div>
  )
}