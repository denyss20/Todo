import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App';
import { TodoLogic } from './components/hooks/TodoLogic';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(
  <TodoLogic>
    <App />
  </TodoLogic>
);
