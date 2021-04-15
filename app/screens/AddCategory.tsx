import React from 'react';
import {View} from 'react-native';
import {Header, NotePad} from '../components';
import {categoryStore} from '../storage';
import {NotesProps, TodoCategoryProps} from '../types';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/core';

const AddCategory = () => {
  const navigation = useNavigation();

  const onSubmit = ({title, description}: NotesProps) => {
    const category: TodoCategoryProps = {
      title: title.trim(),
      description: description.trim(),
      taskCount: 0,
      id: uuid.v4().toString(),
    };
    if (category.title) {
      categoryStore.saveCategory(category);
      navigation.navigate('Home');
    }
  };
  return (
    <View>
      <Header title="Add a New Category" />
      <NotePad
        titlePlaceholder="Category Title"
        descriptionPlaceholder="Little description is always better"
        submitText="Save Category"
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default AddCategory;
