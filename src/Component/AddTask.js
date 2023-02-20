import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../JS/actions/Actions";

export const Addtask = () => {

  const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const handleAddTask = () => {
    if (!description) {
      alert("Please Fill")
    } else {
      dispatch(addtodo(description));
    setDescription("");
  
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form>
        <input
          className="add_input"
          type="text"
          placeholder="New Todo"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="add" onClick={handleAddTask}>
          Add Todo
        </button>
      </form>
    </div>
  );
};