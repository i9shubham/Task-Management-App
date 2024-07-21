import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        changeOrigin: true,
    },
});

export const getAllTasksApi = async () => {
    try {
        const response = await axiosInstance.get(`${baseURL}/tasks`);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const createTaskApi = async (task) => {
    try {
        const response = await axiosInstance.post(`${baseURL}/tasks`, task);
        return response.data;
    } catch (error) {
        return error;
    }
};

export const updateTaskApi = async (task) => {
    try {
        const response = await axiosInstance.put(
            `${baseURL}/tasks/${task.id}`,
            task
        );
        return response.data;
    } catch (error) {
        return error;
    }
};

export const deleteTaskApi = async (id) => {
    try {
        const response = await axiosInstance.delete(`${baseURL}/tasks/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
};
