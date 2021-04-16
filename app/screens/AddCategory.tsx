import React from 'react';
import {View} from 'react-native';
import {Header, NotePad} from '../components';
import {categoryStore} from '../storage';
import {NotesProps, TodoCategoryProps} from '../types';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/core';
import i18n from '../i18n';

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
      <Header title={i18n.t('addCategory')} />
      <NotePad
        titlePlaceholder={i18n.t('title')}
        descriptionPlaceholder={i18n.t('description')}
        submitText={i18n.t('saveCategory')}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default AddCategory;
