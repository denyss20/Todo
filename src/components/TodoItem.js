import React from 'react';

const TodoItem = ({ provided, todo, removeTodo, toggleComplete, editTodo, editingTodoId, saveEditTodo }) => {
  const [newTask, setNewTask] = React.useState(todo.task);

  const handleSave = () => {
    saveEditTodo(todo.id, newTask);
  };

  return (
    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
      {editingTodoId === todo.id ? (
        <div className="ml-auto flex space-x-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className='hover:text-red-600 transition-colors duration-300 ease-in-out cursor-pointer' onClick={handleSave}>Save</button>
        </div>
      ) : (
        <>
          <span
            className="text-left"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.task} (Date: {todo.date})
          </span>
          <div className="ml-auto flex space-x-2">
            <button className='hover:text-red-600 transition-colors duration-300 ease-in-out cursor-pointer' onClick={() => editTodo(todo.id)}>Edit</button>
            <button className='hover:text-red-600 transition-colors duration-300 ease-in-out cursor-pointer' onClick={() => removeTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
