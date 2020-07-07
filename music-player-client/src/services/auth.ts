import axios from 'axios';

const baseURL = '/auth';

export const login = async (body: User) => {
    return await axios.post(`${baseURL}/login`, body);
};

export const logout = async () => {
    return await axios.post(`${baseURL}/logout`);
}