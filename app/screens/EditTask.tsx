import React from 'react';
import {View} from 'react-native';
import {Header, NotePad} from '../components';
import {todoStore} from '../storage';
import {NotesProps, TodoProps} from '../types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import i18n from '../i18n';

type ParamList = {
  Todo: {
    todo: TodoProps;
  };
};

const EditTask = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<ParamList, 'Todo'>>();
  const todo: TodoProps = params.todo;
  const onSubmit = ({title, description}: NotesProps) => {
    todo.title = title.trim();
    todo.description = description.trim();
    if (todo.title) {
      todoStore.saveTodo(todo);
      navigation.navigate('Home');
    }
  };
  return (
    <View>
      <Header title={i18n.t('editTask')} />
      <NotePad
        title={todo.title}
        description={todo.description}
        titlePlaceholder={i18n.t('title')}
        descriptionPlaceholder={i18n.t('description')}
        submitText={i18n.t('saveTask')}
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default EditTask;
