import React from "react";

function Input({inputVal,setInput,addTodo}) {
  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        placeholder="Do Something"
        className="px-2 py-3 rounded-l-md w-full outline-none text-black"
        value={inputVal}
        onChange={setInput}
      />
      <button className="px-11 py-3 bg-green-700 rounded-r-md outline-none text-xl font-semibold hover:bg-orange-600 transition duration-150 ease-out hover:ease-in"
      onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
}

export default Input;
