// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useInsertionEffect } from 'react';
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import Addtodo from "./Components/Addtodo";
// import {TodoItem} from "./Components/TodoItem";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    // Deleting in this way does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      let sno = 0;
    }
    else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <><Header title="MyTodosList" />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      {/* <TodoItem/> */}
    </>


  );
}

export default App;
