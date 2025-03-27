// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./TaskInput.css";


import { addTask, editTask } from "../redux/actions/taskActions"; 

  const TaskInput = ({ editingTask, setEditingTask }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [taskTitle, setTaskTitle] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [description, setDescription] = useState("");

    const [priority, setPriority] = useState("Medium");


  useEffect(() => {
    if (editingTask) {
      setTaskTitle(editingTask.title);
      setDueDate(editingTask.dueDate);
      setDescription(editingTask.description);
      setShowModal(true); // Open modal for editing
    }
  }, [editingTask]);



  const handleAddTask = () => {
    if (taskTitle.trim() === "") return;


    if (editingTask) {
      // Editing existing task
      dispatch(editTask({ id: editingTask.id, title: taskTitle, dueDate, description ,priority }));
      setEditingTask(null);
    } else {
      // Adding new task
      // dispatch(addTask({ id: Date.now(), title: taskTitle, dueDate, description }));
      dispatch(addTask({ title: taskTitle, dueDate, description, priority }));
    }

    // dispatch(addTask({ id: Date.now(), title: taskTitle, dueDate, description }));
    
    setTaskTitle("");
    setDueDate("");
    setDescription("");
    setPriority("Medium");
    setShowModal(false);
  };

  return (
    <div className="task-input-container">
      <button className="add-task-button" onClick={() => setShowModal(true)}>
        + Add New Task
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={() => setShowModal(false)}>&times;</span>
            {/* <h2>Add New Task</h2> */}
            <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>
            <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="input-field"
            />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="input-field"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field"
            />

            
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="input-field">
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
             </select>
             <div className="modal-buttons">
               <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
               <button className="add-btn" onClick={handleAddTask}>Add</button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default TaskInput;
