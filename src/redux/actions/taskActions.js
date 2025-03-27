
 
  export const addTask = (task) => ({
    type: "ADD_TASK",
    payload: task,
  });
  
  export const deleteTask = (id) => ({
    type: "REMOVE_TASK",
    payload: id,
  });
  
  export const editTask = (updatedTask) => ({
    type: "EDIT_TASK",
    payload: updatedTask,
  });
  
  