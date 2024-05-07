import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className=" w-full h-screen " style={{ backgroundColor: color }}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-xl bg-white rounded-md px-3 py-2">

          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
          >
            Blue
          </button>
          <button
            className=" outline-none px-4 py-1 text-white shadow-lg rounded-full"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            Green
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
