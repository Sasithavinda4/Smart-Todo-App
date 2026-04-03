import { useTodos } from "../context/TodoContext";

// Todo Item (Single Todo)
const TodoItem = ({ todo }) => {
    // Gets actions from Context
    const { deleteTodo, toggleTodo } = useTodos();

    return (
        <div className="flex justify-between border p-2 my-2">
            <span
            // Toggle completed state on click (Click text → mark complete/incomplete)
                onClick={() => toggleTodo(todo.id)}
                // Style change based on completed state (line-through if completed)
                className={todo.completed ? "line-through cursor-pointer" : "cursor-pointer"}
            >
                {todo.text}
            </span>
            {/* Delete button (Click to remove todo) */}
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </div>
    );
};

export default TodoItem;