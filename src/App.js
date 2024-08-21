import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import FilteredTodo from './components/FilteredTodo';
import { useTodos } from './components/hooks/TodoLogic';

function App() {

  const {
  editingTodoId,
  filter,
  addTodo,
  toggleComplete,
  removeTodo,
  filteredTodos,
  editTodo,
  saveEditTodo,
  setFilter
  } = useTodos()

  return (
    <div className="text-center">
    <header className="bg-gray-700 text-white p-7">
      <h1 className='text-3xl font-bold'>To-Do List</h1>
    </header>
    <AddTodo addTodo={addTodo} />
    <FilteredTodo filter={filter} setFilter={setFilter} />
    <TodoList
      todos={filteredTodos}
      removeTodo={removeTodo}
      toggleComplete={toggleComplete}
      editTodo={editTodo}
      editingTodoId={editingTodoId}
      saveEditTodo={saveEditTodo}
    />
  </div>
  );
}

export default App;
