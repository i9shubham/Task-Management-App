import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './reducers';

const store = configureStore({
    reducer: { tasks: tasks },
});

// const { dispatch } = store;

export { store };
