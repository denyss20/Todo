// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App';

// Отримуємо елемент з id 'root'
const container = document.getElementById('root');

// Створюємо корінь за допомогою createRoot
const root = createRoot(container);

// Рендеримо додаток
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
