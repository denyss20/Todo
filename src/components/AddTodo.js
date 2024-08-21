import React, { useState } from 'react';
import { useTodos } from './hooks/TodoLogic';

const AddTodo = () => {
  const {addTodo} = useTodos()
  const [task, setTask] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim() && date) {
      addTodo(task, date)
      setTask('')
      setDate('')
    }
  };

  return (
    <form className = "flex items-center justify-center gap-5 mb-5 mt-5" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button className = "hover:text-red-600 transition-colors duration-300 ease-in-out cursor-pointer" type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
