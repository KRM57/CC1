import React, { useState } from 'react'

export default function Fruits() {

    const[input,setInput]=useState("");
    const[output,setOutput]=useState("");

    function handleChange(event)
    {
        setInput(event.target.value);
    }
    function handleClick()
    {
        setOutput(input);
        setInput("");
}


  return (
    <div className='day4'>
      <p>Enter the name of favourite fruit:</p>
    <form>
    <br></br>
    <p>name : </p>
    <input type="text" placeholder='Enter the name' onChange={handleChange} value={input} ></input>
    <p>select category : </p>
       <select name="fruit"  >
       <input  type='text' placeholder='fruits' ></input>
       <option value="fruits">orange</option>
       <option value="fruits">apple</option>
       <option value="fruits">banana</option>
       <option value="fruits">fig</option>
       <option value="fruits">jack</option>
       
       </select>
    
    </form>
    <br></br>
    <button id='button' onClick={handleClick} >SUBMIT</button>
    <h1>Hello {output},your favourite fruit is {}</h1>  
    </div>
  )
}
