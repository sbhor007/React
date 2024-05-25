import { useState } from "react";
import Input from "./components/Input/Input";
import Todo from "./components/TodoContener/Todo/Todo";
import TodoContainer from "./components/TodoContener/TodoContainer";

function App() {
  const [inputVal, setInputVal] = useState();
  const [toDo, setToDo] = useState([]);

  const setInput =(e) =>{
    setInputVal(e.target.value);
  }

   const addTodo = () =>{
    if(inputVal != '')
    setToDo(prevTodo => [...prevTodo,inputVal])

    setInputVal('')
   }
   
   
   const removeTodo = (index)=>{
    setToDo(toDo.filter((val,i)=> index != i ))
    }
    console.log(toDo);

  return (
    <>
      <div className="w-full h-screen flex items-center flex-col bg-slate-900 text-white">
        <h2 className="text-3xl font-bold">ToDo</h2>
        <div className=" w-3/4 flex justify-center items-center pt-4">
          <Input inputVal={inputVal} setInput={setInput} addTodo={addTodo}/>
        </div>
        <div className="w-3/4">
          <TodoContainer getTodo={toDo} removeTodo={removeTodo}/>
        </div>
      </div>
    </>
  );
}

export default App;
