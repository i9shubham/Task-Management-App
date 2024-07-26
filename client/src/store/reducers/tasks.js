import { createSlice } from '@reduxjs/toolkit';
import {
    createTaskAction,
    deleteTaskAction,
    getAllTasksAction,
    updateTaskAction,
} from '../actions/taskActions';

const initialState = {
    tasks: [],
    showNotification: false,
    notificationData: '',
    loading: false,
    error: null,
};

const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.tasks.map((task) => {
                if (
                    task.status === action.payload ||
                    action.payload === 'all'
                ) {
                    task.show = true;
                } else {
                    task.show = false;
                }
            });
        },
        setNotificationToDefault: (state) => {
            state.showNotification = false;
            state.notificationData = '';
        },
    },
    extraReducers(builder) {
        builder
            .addCase(createTaskAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createTaskAction.fulfilled, (state, action) => {
                state.tasks.push({ ...action.payload, show: true });
                state.loading = false;
                state.showNotification = true;
                state.notificationData = 'Task created successfully';
            })
            .addCase(createTaskAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getAllTasksAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllTasksAction.fulfilled, (state, action) => {
                state.tasks = action.payload.map((task) => {
                    return {
                        ...task,
                        show: true,
                    };
                });
                state.loading = false;
            })
            .addCase(getAllTasksAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateTaskAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateTaskAction.fulfilled, (state, action) => {
                state.tasks = state.tasks.map((task) => {
                    if (task.id === action.payload.id) {
                        return { ...action.payload, show: true };
                    }
                    return task;
                });
                state.loading = false;
                state.showNotification = true;
                state.notificationData = 'Task updated successfully';
            })
            .addCase(updateTaskAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteTaskAction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteTaskAction.fulfilled, (state, action) => {
                state.tasks = state.tasks.filter(
                    (task) => task.id !== action.meta.arg
                );
                state.loading = false;
                state.showNotification = true;
                state.notificationData = 'Task deleted successfully';
            })
            .addCase(deleteTaskAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setFilter, setNotificationToDefault } = tasks.actions;

export default tasks.reducer;
