import axios from 'axios';
import { User } from '../../@types/global-types';

const instance = axios.create({
  baseURL: 'https://api.example.com'
});

export default {
  createUser: async (user: User) => {
    return await instance.post('/user', { ...user });
  }
};
