import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Create Todo Context
const TodoContext = createContext();

// Custom hook
export const useTodos = () => useContext(TodoContext);

// Todo Provider (Main Engine)
export const TodoProvider = ({ children }) => {
    // Todo State (Data)
    const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    // Filter State
    const [filter, setFilter] = useState("all");

    // Auto Save (useEffect)
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Fuctions (Actions)
    // Add Todo
    const addTodo = (text) => {
        setTodos([...todos, { id: uuidv4(), text, completed: false }]);
        // setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };

    // Delete Todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    // Toggle Todo
    const toggleTodo = (id) => {
        setTodos(
            todos.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    // Sharing Values
    const value = {
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        filter,
        setFilter,
    };

    return (
        // Provider Wrapper
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
};

// This is called lazy initialization

// Why not just useState([])?

// Because:

// It loads saved todos from localStorage
// Runs only ONCE (performance optimization)

// Think :

// "Load previous data when app starts"



// Why map in toggleTodo?

// You update ONE item without touching others