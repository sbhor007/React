import React, { useEffect, useState } from "react";
import Box from "./componunent/Box";

function App() {
  const [boxContent, setBoxContent] = useState([]);
  useEffect(() => {
    const newBoxContain = [
      {
        name: "Dipak",
        age: 21,
      },
      {
        name: "santosh",
        age: 21,
      },
      {
        name: "yash",
        age: 21,
      },
    ];

    setBoxContent(newBoxContain);
  }, []);

  const clearBox = () =>{
    setBoxContent([])
  }

  return (
    <>
      {boxContent.map((curVal, index) => {
        return <Box key={index} name={curVal.name} age={curVal.age} />;
      })}
      <div className="flex justify-center mt-8">
        <button
          className="bg-green-600 px-5 py-2 rounded-md shadow-md text-white"
          onClick={clearBox}
        >
          Clear
        </button>
      </div>
    </>
  );
}

export default App;
