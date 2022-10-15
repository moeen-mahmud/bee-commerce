import { api } from './config';

export const client = {
  get: async (url, ...options) => {
    try {
      const response = await api.get(url, ...options);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  },

  post: async (url, data, ...options) => {
    try {
      const response = await api.post(url, data, ...options);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  },

  put: async (url, data, ...options) => {
    try {
      const response = await api.put(url, data, ...options);
      if (response.status === 200) {
        console.log('Consoling From Client', response.data);
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (url, ...options) => {
    try {
      const response = await api.delete(url, ...options);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
