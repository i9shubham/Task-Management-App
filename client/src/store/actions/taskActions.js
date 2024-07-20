import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    createTaskApi,
    deleteTaskApi,
    getAllTasksApi,
    updateTaskApi,
} from '../middlewares/taskApis';

export const getAllTasksAction = createAsyncThunk(
    'tasks/getAllTasks',
    async () => {
        const response = await getAllTasksApi();
        return response;
    }
);

export const createTaskAction = createAsyncThunk(
    'tasks/createTask',
    async (task) => {
        const response = await createTaskApi(task);
        return response;
    }
);

export const updateTaskAction = createAsyncThunk(
    'tasks/updateTask',
    async (task) => {
        const response = await updateTaskApi(task);
        return response;
    }
);

export const deleteTaskAction = createAsyncThunk(
    'tasks/deleteTask',
    async (task) => {
        const response = await deleteTaskApi(task);
        return response;
    }
);
