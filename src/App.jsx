import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodos";
import Todos from "./components/Todos";
import { setTodos } from "./features/todo/todoSlice";

function App() {
  const [editingTodo, setEditingTodo] = useState(null);
  const hasHydrated = useRef(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  // local storage functionality for getting items
  useEffect(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      if (Array.isArray(storedTodos)) {
        dispatch(setTodos(storedTodos));
      }
    } catch {
      localStorage.removeItem("todos");
    }

    hasHydrated.current = true;
  }, [dispatch]);

  // local storage functionality for setting new items
  useEffect(() => {
    if (!hasHydrated.current) return;
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black px-3 sm:px-4">
      <div className="w-full max-w-md bg-zinc-900 p-4 sm:p-6 rounded-2xl shadow-xl">
        <h1 className="text-xl sm:text-2xl font-bold text-center text-white mb-5 sm:mb-6">
          Redux Toolkit Todo
        </h1>

        <AddTodo editingTodo={editingTodo} setEditingTodo={setEditingTodo} />
        <Todos setEditingTodo={setEditingTodo} />
      </div>
    </div>
  );
}

export default App;
