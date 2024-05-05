import { useState } from "react";
// useState -->it responsible for change state -- change UI values
import "./App.css";

function App() {
  //    variable , function -- variable name are any
  let [counter, setCounter] = useState(10); //using useState hoock -- pass default value any -- it reruens two values in array form

  // let counter = 5;
  const addValue = () => {
    if (counter < 20) counter = counter + 1;
    // console.log("click", counter);
    setCounter(counter); // call setcounter function and pass variable
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
    // console.log("click", counter - 1);
  };
  return (
    <>
      <h1>Chai aur code</h1>
      <h2>counter : {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remce Value {counter}</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
