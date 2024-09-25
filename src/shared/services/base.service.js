import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const baseService = {
    async get(endpoint) {
        const response = await axios.get(`${API_URL}${endpoint}`);
        return response.data;
    },

    async post(endpoint, data) {
        const response = await axios.post(`${API_URL}${endpoint}`, data);
        return response.data;
    },

    async put(endpoint, data) {
        const response = await axios.put(`${API_URL}${endpoint}`, data);
        return response.data;
    },

    async delete(endpoint) {
        const response = await axios.delete(`${API_URL}${endpoint}`);
        return response.data;
    }
};