import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        accept: 'application/json',
    },
})

export const requests = {
    getTodos: () => {
        return axiosInstance.get('/todos/1')
    }
}
