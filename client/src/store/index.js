import { configureStore } from '@reduxjs/toolkit';
import { tasks } from './reducers';

const store = configureStore({
    reducer: { tasks: tasks },
});

export { store };
