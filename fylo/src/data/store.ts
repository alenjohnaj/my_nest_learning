import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'; // Import other reducers
import todosReducer from './todos/todosSlice'; // Import the todos reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer, // Include the todos reducer
  },
});

export default store;