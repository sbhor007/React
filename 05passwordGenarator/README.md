# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## useCAllBack (hoock)

- is a React hoock that lets you create a function defination between re-renders.
- in useCallback memarise function data 

```js
// syntax
useCallBack(function,[dependancies])
```

## useEffect (hoock)
- if change dependancy array value then useEffect hoock are `Re-run`

## useRef (hoock)

- it is an reference hoock
- get reference of any value


```js

import React, { useState, useCallback, useEffect , useRef } from "react";

function App() {
  // variable collection
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //useRef hoock
  const passwordRef = useRef(null)

// to generate password function
  const passwordGenerator = useCallback(() => {  // store to the cache memory 
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    }

    let pass = "";
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);


  }, [length, numberAllowed, characterAllowed,setPassword]);


// function to copy clipboard password
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current ?.select() // to increase user experience -- select/hilight password
    passwordRef.current?.setSelectionRange(0,length)
    //Copy password to clipboard
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator]); // store to the cache menory -- use memoization concept

  
  return (
    <>
      <div className="w-full max-w-4xl mx-auto shadow-md rounded-lg px-4 py-5 my-8 font-serif text-white bg-gray-700">
        <h1 className=" text-center white  mb-4 text-xl ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-black"
            placeholder="Password"
            readOnly
            ref={passwordRef} // passing reference to reference hoock
          />
          <button className="outline-none bg-blue-900 py-2 px-4  white" onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultValue={numberAllowed}
              id="numberInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


```