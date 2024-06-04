import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world" }],
};

export const todoSlice = createSlice({
  name: "todo", // name -> default property
  initialState, // todos: [{id:1,text: "hello world"}]
  reducers: {
    //property :    ,provide values
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // create unique id
        text: action.payload, //action.payload.text
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload); //action.payload.id
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? todo.text : todo)
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
