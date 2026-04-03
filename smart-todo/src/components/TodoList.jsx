import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
    // Todo List (Displaying Todos)
    const { todos, filter } = useTodos();
    // const { todos } = useTodos();

    // Filtering logic
    const filteredTodos = todos.filter((todo) => {
        // if (filter === "all") return true;
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true; // Default case
    });

    return (
        <div>
            {/* Rendering list of todos */}
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;

// In TodoList, we get todos and filter from context
// We filter the todos based on the current filter state
// We map over the filtered todos and render a TodoItem for each one

// For each todo :
// Render a TodoItem
// Use key for React performance