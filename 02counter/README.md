# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Interwie

```jsx

import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(10);
  const addValue = () => {
    if (counter < 20) {
      // counter = counter + 1;
      //duplicate problem
      // in useState send data in to baches 
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


```

## Code With Comments
- main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

```

- App.jsx
```jsx
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

```