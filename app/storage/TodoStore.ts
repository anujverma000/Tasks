import {TodoProps} from '../types';
import {saveData, getData, removeData, getAllKeys, multiGet} from './Storage';

const TODO_STORAGE_KEY = '@com.tasks.todo';

class TodoStore {
  async getTodo(id: string): Promise<TodoProps> {
    return getData(`${TODO_STORAGE_KEY}:${id}`).then(json => {
      return JSON.parse(json || '{}') as TodoProps;
    });
  }

  async saveTodo(todo: TodoProps): Promise<void> {
    return saveData(`${TODO_STORAGE_KEY}:${todo.id}`, JSON.stringify(todo));
  }

  async deleteTodo(id: string): Promise<void> {
    return removeData(`${TODO_STORAGE_KEY}:${id}`);
  }

  async getAllTodos(): Promise<TodoProps[]> {
    return getAllKeys()
      .then((keys: string[]) => {
        const fetchKeys = keys.filter(k => {
          return k.startsWith(TODO_STORAGE_KEY);
        });
        return multiGet(fetchKeys);
      })
      .then(todos => {
        return todos.map(todo => {
          return JSON.parse(todo[1] || '{}') as TodoProps;
        });
      });
  }
}

const todoStore = new TodoStore();

export default todoStore;
