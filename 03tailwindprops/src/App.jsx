import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username : 'santosh',
    age : 20
  }

  let newArr= [1,2,3]
  return (
    <>
      <h1 className="bg-green-400 text-black p-3 rounded-md font-serif mb-5">
        Teilwind Test
      </h1>
      <Card username = 'chai aur code' btnText='Visit me' someObj = {myObj} myarr = {newArr} /> {/* //pass values one component to another component */}
      <Card username= 'Santosh' btnText='click me'/>
      <Card />
      
    </>
  );
}

export default App;
