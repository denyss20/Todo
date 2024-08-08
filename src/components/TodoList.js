import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleComplete, editTodo, editingTodoId, saveEditTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
          editingTodoId={editingTodoId}
          saveEditTodo={saveEditTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
