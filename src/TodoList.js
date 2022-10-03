import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        todos.map((todo) =>
                            <Todo setTodos={setTodos} todo={todo} todos={todos} text={todo.text} key={todo.id}></Todo>
                        )

                    }
                </ul>
            </div>
        </div>
    );
};

export default TodoList;