import React from "react";

function Todo({data,removeTodo,index}) {
  return (
    <>
    <div className="flex justify-between pt-5">
      {data}
      <div className="flex gap-4">
        <input type="checkbox" />
        <button className="bg-red-800 px-4 py-1 rounded-md" onClick={()=>removeTodo(index)}>Delete</button>
      </div>
    </div>
    <hr className="mt-2" />
    </>
  );
}

export default Todo;
