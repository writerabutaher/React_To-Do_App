import { useState, useEffect } from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    console.log('run');
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  }

  // console.log(filterTodos);

  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      ></Form>
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filterTodos={filterTodos}
      ></TodoList>
    </>
  );
}

export default App;
