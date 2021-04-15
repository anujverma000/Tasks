import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async (key: string, value: string) =>
  await AsyncStorage.setItem(key, value);

export const getData = async (key: string) => await AsyncStorage.getItem(key);

export const removeData = async (key: string) =>
  await AsyncStorage.removeItem(key);

export const multiGet = async (keys: string[]) =>
  await AsyncStorage.multiGet(keys);

export const getAllKeys = async () => await AsyncStorage.getAllKeys();
