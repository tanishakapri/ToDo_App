
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import taskReducer from './redux/reducers/taskReducer';
import authReducer from './redux/reducers/authReducer';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { login, logout } from './redux/actions/authActions';
import './styles.css';

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [editingTask, setEditingTask] = React.useState(null);

  return (
    <div className="app-container">
      <h1 className="title">To-Do App</h1>
      {!isAuthenticated ? (
        <button className="auth-button" onClick={() => dispatch(login())}>Login</button>
      ) : (
        <>
          <button className="auth-button" onClick={() => dispatch(logout())}>Logout</button>
          <TaskInput editingTask={editingTask} setEditingTask={setEditingTask} />
          <TaskList setEditingTask={setEditingTask} />
        </>
      )}
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
