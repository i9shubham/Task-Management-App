import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;

export const getAllTasksApi = async () => {
    try {
        const response = await axios.get(`${baseURL}/tasks`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const createTaskApi = async (task) => {
    try {
        const response = await axios.post(`${baseURL}/tasks`, task);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const updateTaskApi = async (task) => {
    try {
        const response = await axios.put(`${baseURL}/tasks/${task.id}`, task);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const deleteTaskApi = async (id) => {
    try {
        const response = await axios.delete(`${baseURL}/tasks/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};
