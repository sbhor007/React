# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  

# props (Properties)
- it is an object

```jsx

    

import React from 'react'
//rfce
 //function Card(props) { //--> without destructuring
function Card({username,btnText='read me'}) { // with destructuring props
                        // default Value Pass. if user not passing value
    console.log(username);
    
  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btnText || 'Read me'} →
    </button>
  </div>
</div>
  )
}

export default Card

```

- App.jsx
```jsx
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

```
