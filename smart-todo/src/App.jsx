import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Smart Todo</h1>
      {/* Render the components */}
      <TodoInput />
      <FilterBar />
      <TodoList />
    </div>
  );
}

export default App;

// In App.jsx, we will render the main structure of our app
// We will import and use the components we created (TodoInput, TodoList, FilterBar)
// We will wrap everything in a container div and add a title