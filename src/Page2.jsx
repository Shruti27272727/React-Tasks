import { useState, useEffect } from "react";

function Todo() {
    const [items, setItems] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
            if (items.length > 0 && !items.every(item => item.done)) {
                alert("Reminder: Complete your tasks");
            }
        }, 7000);
        return () => clearInterval(interval);
    }, [items]);
    useEffect(() => {
        if (items.length > 0 && items.every(item => item.done)) {
            const timeout = setTimeout(() => {
                alert(" Congratulations,You have completed all your tasks!");
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [items]);

    function addTodo() {
        if (newTodo.trim() === "") return;
        setItems([...items, { text: newTodo, done: false }]);
        setNewTodo("");
    }


    function toggleDone(index) {
        const updated = items.map((item, i) =>
            i === index ? { ...item, done: !item.done } : item
        );
        setItems(updated);
    }

    return (
        <div>
            <h2>To Do List</h2>

            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTodo}>Add</button>

            {items.length === 0 ? (
                <p>No to do list</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => toggleDone(index)}
                            style={{
                                textDecoration: item.done ? "line-through" : "none",
                                cursor: "pointer"
                            }}
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Todo;
