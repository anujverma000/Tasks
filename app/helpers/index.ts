import {categoryStore, todoStore} from '../storage';
import uuid from 'react-native-uuid';
import {TodoCategoryProps} from '../types';

const DEFAULT_CATEGORY_ID = '@com.tasks.todoCategory_default';

export const personalCategory: TodoCategoryProps = {
  title: 'Personal',
  description: '',
  id: DEFAULT_CATEGORY_ID,
};

export const healthCategory: TodoCategoryProps = {
  title: 'Health',
  description: '',
  id: uuid.v4().toString(),
};

export const workCategory: TodoCategoryProps = {
  title: 'Work',
  description: '',
  id: uuid.v4().toString(),
};

const setupInitialCategories = async () => {
  await categoryStore.saveCategory(healthCategory);
  await categoryStore.saveCategory(workCategory);
  await categoryStore.saveCategory(personalCategory);
};

const setupInitialTasks = async () => {
  await todoStore.saveTodo({
    id: uuid.v4().toString(),
    title: 'Evening Walk',
    description: 'half an hour minimum',
    completed: false,
    category: healthCategory,
  });

  await todoStore.saveTodo({
    id: uuid.v4().toString(),
    title: 'Talk to yoga guy',
    description: 'Do it by this weekend',
    completed: false,
    category: healthCategory,
  });

  await todoStore.saveTodo({
    id: uuid.v4().toString(),
    title: 'Complete the assignment',
    description: 'with all the features',
    completed: false,
    category: workCategory,
  });

  await todoStore.saveTodo({
    id: uuid.v4().toString(),
    title: 'Get the Milk',
    description: '2 ltrs',
    completed: false,
    category: personalCategory,
  });
};

export const setupInitialData = async () => {
  await setupInitialCategories();
  await setupInitialTasks();
};
