import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleOnDelete = (index: number) => {
    const updateItems = items.filter((_, i) => i !== index);
    setItems(updateItems);
  };

  const handleUpdateItem = () => {
    const updatedItems = [...items];
    setItems([...updatedItems]);
    setEditIndex(null);
  };

  const handleOnEdit = (index: number) => {
    setEditIndex(index);
  };

  return (
    <>
      <div className="">
        <header className="">
          <h1>Todo App</h1>
        </header>
        <div>Basic bare bone todo app</div>
        <div>
          <input
            type="text"
            placeholder="Add a new task"
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={handleAddItem}>Add</button>
        </div>
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {editIndex !== index && (
                  <>
                    {item}
                    <button onClick={() => handleOnDelete(index)}>
                      delete
                    </button>
                    <button onClick={() => handleOnEdit(index)}>edit</button>
                  </>
                )}

                {editIndex === index && (
                  <>
                    <input
                      type="text"
                      value={items[index]}
                      onChange={(e) => {
                        const updatedList = [...items];
                        updatedList[index] = e.target.value;
                        setItems(updatedList);
                      }}
                    />
                    <button onClick={() => handleUpdateItem()}>save</button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
