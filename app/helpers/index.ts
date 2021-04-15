import {categoryStore, todoStore} from '../storage';
import uuid from 'react-native-uuid';
import {TodoCategoryProps} from '../types';

export const allCategory: TodoCategoryProps = {
  title: 'All',
  description: '',
  taskCount: 0,
  id: uuid.v4().toString(),
};

export const healthCategory: TodoCategoryProps = {
  title: 'Health',
  description: '',
  taskCount: 0,
  id: uuid.v4().toString(),
};

export const workCategory: TodoCategoryProps = {
  title: 'Work',
  description: '',
  taskCount: 0,
  id: uuid.v4().toString(),
};

export const personalCategory: TodoCategoryProps = {
  title: 'Personal',
  description: '',
  taskCount: 0,
  id: uuid.v4().toString(),
};

const setupInitialCategories = () => {
  categoryStore.saveCategory(allCategory);
  categoryStore.saveCategory(healthCategory);
  categoryStore.saveCategory(workCategory);
  categoryStore.saveCategory(personalCategory);
};

const setupInitialTasks = () => {
  todoStore.saveTodo({
    id: uuid.v4().toString(),
    title: 'Evening Walk',
    description: 'half an hour minimum',
    completed: false,
    category: healthCategory,
  });

  todoStore.saveTodo({
    id: uuid.v4().toString(),
    title: 'Talk to yoga guy',
    description: 'Do it by this weekend',
    completed: false,
    category: healthCategory,
  });

  todoStore.saveTodo({
    id: uuid.v4().toString(),
    title: 'Complete the assignment',
    description: 'with all the features',
    completed: false,
    category: workCategory,
  });
};

export const setupInitialData = () => {
  setupInitialCategories();
  setupInitialTasks();
};
