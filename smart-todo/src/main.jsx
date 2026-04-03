import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from './context/TodoContext.jsx'

// Wraps your whole app inside TodoProvider.. So, any component inside <App /> can access todos..

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>,
)
