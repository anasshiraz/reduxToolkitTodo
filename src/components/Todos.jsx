import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos({ setEditingTodo }) {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-base sm:text-lg font-semibold text-white mb-3">
        Your Todos
      </h2>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-start sm:items-center justify-between gap-3 bg-zinc-800 px-3 sm:px-4 py-3 rounded-lg hover:bg-zinc-700 transition"
          >
            <span className="text-white break-words pr-2 flex-1">{todo.text}</span>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setEditingTodo(todo)}
                className="px-2 py-1 text-xs rounded bg-emerald-600 hover:bg-emerald-700 text-white transition"
              >
                Update
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-400 hover:text-red-600 transition"
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
