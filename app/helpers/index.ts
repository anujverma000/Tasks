import {categoryStore, todoStore} from '../storage';
import uuid from 'react-native-uuid';
import {TodoCategoryProps} from '../types';

export const healthCategory: TodoCategoryProps = {
  title: 'Health',
  description: '',
  taskCount: 2,
  id: uuid.v4().toString(),
};

export const workCategory: TodoCategoryProps = {
  title: 'Work',
  description: '',
  taskCount: 1,
  id: uuid.v4().toString(),
};

export const personalCategory: TodoCategoryProps = {
  title: 'Personal',
  description: '',
  taskCount: 1,
  id: uuid.v4().toString(),
};

const setupInitialCategories = () => {
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

  todoStore.saveTodo({
    id: uuid.v4().toString(),
    title: 'Get the Milk',
    description: '2 ltrs',
    completed: false,
    category: personalCategory,
  });
};

export const setupInitialData = () => {
  setupInitialCategories();
  setupInitialTasks();
};
