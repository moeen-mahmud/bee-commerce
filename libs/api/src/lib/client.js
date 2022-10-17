import { api } from './config';

export const client = {
  get: async (url, options) => {
    try {
      const response = await api.get(url, options);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  post: async (url, data, options) => {
    try {
      const response = await api.post(url, data, options);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  put: async (url, data, ...options) => {
    try {
      const response = await api.put(url, data, ...options);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (url, ...options) => {
    try {
      const response = await api.delete(url, ...options);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
