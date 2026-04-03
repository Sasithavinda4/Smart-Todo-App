import { useTodos } from "../context/TodoContext";

// FilterBar (Switch views)
const FilterBar = () => {
    const { filter, setFilter } = useTodos();

    return (
        <div className="flex gap-2 my-3">
            // Buttons to set the filter state (Updates global filter state on click)
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("active")}>Active</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
        </div>
    );
};

export default FilterBar;

// In FilterBar, we get filter and setFilter from context
// We will create buttons for "All", "Active", and "Completed"
// When a button is clicked, it will call setFilter with the corresponding filter value