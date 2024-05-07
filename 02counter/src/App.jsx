import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  const addValue = () => {
    if (counter < 20) {
      //duplicate problem
      setCounter((counter) =>  counter + 1);
      setCounter((counter) =>  counter + 1);
      setCounter((counter) =>  counter + 1);
      setCounter((counter) =>  counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1);
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
