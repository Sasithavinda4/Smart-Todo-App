import { useState } from "react";
import { useTodos } from "../context/TodoContext";

const TodoInput = () => {
    // Todo Input (Adding Todos)
    const [text, setText] = useState("");
    const { addTodo } = useTodos();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        // if (text.trim() === "") return;
        addTodo(text);
        setText("");
    };

    return (
        // When form is submitted, it will trigger the handleSubmit function
        // Tailwind CSS for styling
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input 
                // type="text"
                value={text}
                // When user types in the input, it will update the text state as user types
                onChange={(e) => setText(e.target.value)}
                placeholder="Add Todo..."
                className="border p-2 flex-1"
            />
            <button className="bg-blue-500 text-white px-4">
            {/* <button type="submit" className="bg-blue-500 text-white p-2 rounded"></button> */}
                Add
            </button>
        </form>
    );
};

// In handleSubmit, 
// Stop page reload (preventDefault)
// Ignore empty input
// Call addTodo(text) → updates global state
// Clear input