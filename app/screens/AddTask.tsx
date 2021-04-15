import React from 'react';
import {View} from 'react-native';
import {Header, NotePad} from '../components';
import {categoryStore, todoStore} from '../storage';
import {NotesProps, TodoCategoryProps, TodoProps} from '../types';
import uuid from 'react-native-uuid';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {} from '../views/TodoCategoryList';

type ParamList = {
  Category: {
    selectedCategory: TodoCategoryProps;
  };
};

const AddTask = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<ParamList, 'Category'>>();
  const todoCategory = params.selectedCategory;
  const onSubmit = ({title, description}: NotesProps) => {
    const todo: TodoProps = {
      title: title.trim(),
      description: description.trim(),
      completed: false,
      id: uuid.v4().toString(),
      category: todoCategory,
    };
    if (todo.title) {
      todoStore.saveTodo(todo);
      todoCategory.taskCount = todoCategory.taskCount + 1;
      categoryStore.saveCategory(todoCategory);
      navigation.navigate('Home');
    }
  };
  return (
    <View>
      <Header title="Add a New Task" />
      <NotePad
        titlePlaceholder="Task Title"
        descriptionPlaceholder="Little description is always better"
        submitText="Save Task"
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default AddTask;
