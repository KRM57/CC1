import React from "react";

function ErrorHandle() {
  const [numbers, setNumbers] = React.useState([]);
  const [total, setSum] = React.useState();
  const [error, setError] = React.useState();

  const addSum = () => {
    try {
      setSum(numbers.reduce((sum, current) => sum + current));
      setError(null);
    } 
    catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setNumbers(e.target.value.split(" ").map(Number))}
        placeholder="Enter comma separated numbers"
      /><br></br>
      <button onClick={addSum}>Calculate Sum</button><br></br>
      
      {total && <div>The sum of the array is {total}</div>}<br></br>
      {error && <div>Error: {error}</div>}
    </div>
  );
}

export default ErrorHandle;