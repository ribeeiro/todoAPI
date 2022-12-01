import axios from 'axios';
import { User } from '../../@types/global-types';

const instance = axios.create({
  baseURL: 'https://api.example.com'
});

export const createUser = async (user: User) => {
  return await instance.post('/user', { ...user });
};

export const auth = async (user: Omit<User, 'name'>) => {
  return await instance.post('/login', { ...user });
};
