import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [updatedTodo, setUpdatedTodo] = useState<string>("");

  return (
    <>
      <div className="">
        <header className="">
          <h1>Todo App</h1>
        </header>
        <div>Basic bare bone todo app</div>
        <input
          type="text"
          placeholder="Add todo"
          onChange={(e) => setTodo(e.currentTarget.value)}
          value={todo}
        />
        <button
          onClick={() => {
            setTodos([...todos, todo]);
            setTodo("");
          }}
        >
          Add
        </button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <>
                {editIndex === index && (
                  <div>
                    <input
                      value={updatedTodo}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUpdatedTodo(e.currentTarget.value)
                      }
                    />
                    <button
                      onClick={() => {
                        setTodos(() => {
                          const newTodos: string[] = [...todos];
                          newTodos[index] = updatedTodo;
                          return newTodos;
                        });
                        setEditIndex(null);
                      }}
                    >
                      save
                    </button>
                  </div>
                )}
                {editIndex !== index && (
                  <>
                    <span
                      onClick={() =>
                        setTodos(() => {
                          const newTodos = [...todos];
                          newTodos.splice(index, 1);
                          return newTodos;
                        })
                      }
                    >
                      {todo}
                    </span>
                    <button
                      onClick={() => {
                        setEditIndex(index);
                        setUpdatedTodo(todos[index]);
                      }}
                    >
                      edit
                    </button>
                  </>
                )}
              </>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
