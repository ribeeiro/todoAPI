import axios from 'axios';
import { User } from '../../@types/global-types';

const BASE_URL = 'http://localhost:8080/api/v1';
export default {
  createUser: async (user: User) => {
    return await axios.post(`${BASE_URL}/user`, { ...user });
  }
};
