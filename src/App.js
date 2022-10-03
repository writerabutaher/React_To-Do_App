import { useState } from 'react';
import './App.css';
import Form from './Form';
import TodoList from './TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}></Form>
      <TodoList></TodoList>

    </div>
  );
}

export default App;
