import React from "react";

function Box({ name, age }) {
  return (
    <h1 className="bg-sky-500 my-2 px-3 py-3 rounded-md w-96 mx-auto">
      Name : {name} & Age : {age}
    </h1>
  );
}
export default Box;
