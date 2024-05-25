import React from 'react'
import Todo from './Todo/Todo'
function TodoContainer({getTodo,removeTodo}) {

  return (
    <>
        {
          getTodo.map((list,index)=>{
            return (
              <Todo key={index} index={index} data={list} removeTodo={removeTodo}/>
            )
          })
        }
    </>
    

  )
}

export default TodoContainer