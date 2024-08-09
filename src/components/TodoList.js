import React from 'react';
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const TodoList = ({ todos, removeTodo, toggleComplete, editTodo, editingTodoId, saveEditTodo, setTodos }) => {

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>

      {todos.length > 0 && (
        <Droppable droppableId="todos-list">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={String(todo.id)} index={index}>
                  {(provided) => (
                    <TodoItem
                      provided={provided}
                      todo={todo}
                      removeTodo={removeTodo}
                      toggleComplete={toggleComplete}
                      editTodo={editTodo}
                      editingTodoId={editingTodoId}
                      saveEditTodo={saveEditTodo}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder ? provided.placeholder : null}
            </ul>
          )}
        </Droppable>
      )}
    </DragDropContext>
  );
};

export default TodoList;
