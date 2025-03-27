
const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        // tasks: [...state.tasks, action.payload],
        tasks: [...state.tasks, { ...action.payload, id: new Date().getTime() }]
          .sort((a, b) => {
            const priorityOrder = { High: 1, Medium: 2, Low: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          }),
      };

    // // case "REMOVE_TASK":
    // //   return {
    // //     ...state,
    // //     tasks: state.tasks.filter((task) => task.id !== action.payload),
    // //   };

    //   case "DELETE_TASK":
    //   return {
    //     ...state,
    //     tasks: state.tasks.map((task) =>
    //       task.id === action.payload.id ? action.payload : task
    //     ),
    //   };



      case "EDIT_TASK":
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            task.id === action.payload.id ? action.payload : task
          ),
        };
  
      case "REMOVE_TASK":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };

    default:
      return state;
  }
};

export default taskReducer;



