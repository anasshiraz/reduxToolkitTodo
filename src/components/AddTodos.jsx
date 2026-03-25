import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodos({ editingTodo, setEditingTodo }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (editingTodo) {
      dispatch(updateTodo({ id: editingTodo.id, text: input.trim() }));
      setEditingTodo(null);
    } else {
      dispatch(addTodo(input.trim()));
    }

    setInput("");
  };

  React.useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    }
  }, [editingTodo]);

  return (
    <form
      onSubmit={addTodoHandler}
      className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-6"
    >
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full flex-1 px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        type="submit"
        className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium transition"
      >
        {editingTodo ? "Update Todo" : "Add"}
      </button>
    </form>
  );
}

export default AddTodos;
