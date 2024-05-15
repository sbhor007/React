import React,{ useEffect, useState } from "react";
import Box from "./componunent/Box";

function App() {
  const [boxContent, setBoxContent] = useState([]);
useEffect(()=>{
  const newBoxContain = [
    {
      name:'Dipak',
      age:21
    },
    {
      name:'santosh',
      age:21
    },
    {
      name:'yash',
      age:21
    }
  ];

  setBoxContent(newBoxContain)
},[])
  
  return (
    <>
      {boxContent.map((curVal,index)=>{
        return <Box key={index} name={curVal.name} age={curVal.age} />
      })}
    </>
  );
}

export default App;
