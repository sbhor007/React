import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
// context api fnctionality
  const addTodo = (todo) =>{
    setTodos((prevTodo) => [{id:Date.now(),...todo},...prevTodo])
  }

  const updateTodo = (id,todo) =>{
    setTodos((prevTodo) => prevTodo.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))      
  }

  const deleteTodo = (id) => {
    setTodos(prevTodo => prevTodo.filter((prevTodo)=> prevTodo.id !== id))
  }

  const toggeleComplete = (id) =>{
    setTodos((prevTodo) => prevTodo.map((prevTodo) => prevTodo === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo))
  }

  //local storage functionalitys

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos &&todos.length > 0)
      {
        setTodos(todos);
      }
  },[])

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
    // JOSON.stringify() -- > conver data into string formate
  },[todos])

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggeleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.key} className="w-full"> 
                <TodoItem too={todo} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
