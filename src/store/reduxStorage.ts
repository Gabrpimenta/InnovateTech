import { Storage } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const reduxStorage: Storage = {
  setItem: (key, value) => {
    try {
      storage.set(key, value);
      return Promise.resolve(true);
    } catch (error) {
      console.error('Error setting item in MMKV:', error);
      return Promise.reject(error);
    }
  },
  getItem: async key => {
    try {
      const value = await storage.getString(key);
      return Promise.resolve(value);
    } catch (error) {
      console.error('Error getting item from MMKV:', error);
      return Promise.reject(error);
    }
  },
  removeItem: key => {
    try {
      storage.delete(key);
      return Promise.resolve();
    } catch (error) {
      console.error('Error removing item from MMKV:', error);
      return Promise.reject(error);
    }
  },
};

export default reduxStorage;
