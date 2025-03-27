

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/actions/taskActions";
import "./TaskList.css";


const TaskList = ({ setEditingTask }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div className="task-list-container">
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (

        <div key={task.id} className={`task-item priority-${task.priority.toLowerCase()}`}>
           <h3>{task.title}</h3>
           <p>Due Date: {task.dueDate || "No date set"}</p>
           <p>{task.description}</p>
           <p><strong>Priority:</strong> {task.priority}</p>

           <button className="edit-btn" onClick={() => setEditingTask(task)}>Edit</button>
            <button className="delete-btn" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </div>




        ))
      )}
    </div>
  );
};

export default TaskList;


