import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import 'react-native-gesture-handler/jestSetup';

jest.useFakeTimers();
Date.now = jest.fn(() => 1482363367071);
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
