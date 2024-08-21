import { useState, useEffect, createContext, useContext } from 'react';

  const TodoContext = createContext()

  export const useTodos = () => useContext(TodoContext)

  export const TodoLogic = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [editingTodoId, setEditingTodoId] = useState(null)
  const [filter, setFilter] = useState('all')


  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'))
    if (savedTodos && savedTodos.length > 0) {
      setTodos(savedTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (task, date) => {
    const newTodo = { id: Date.now(), task, date, completed: false }
    setTodos([...todos, newTodo])
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true
    if (filter === 'completed') return todo.completed
    if (filter === 'incomplete') return !todo.completed
    return true
  })

  const editTodo = (id) => {
    setEditingTodoId(id)
  }

  const saveEditTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: newTask } : todo
      )
    )
    setEditingTodoId(null)
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        editingTodoId,
        filter,
        addTodo,
        toggleComplete,
        removeTodo,
        filteredTodos,
        editTodo,
        saveEditTodo,
        setFilter
      }}
    >
      {children}
    </TodoContext.Provider>
    )
  }

export default TodoLogic;
