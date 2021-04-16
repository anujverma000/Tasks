import React from 'react';
import {View} from 'react-native';
import {Header, NotePad} from '../components';
import {categoryStore} from '../storage';
import {NotesProps, TodoCategoryProps} from '../types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import i18n from '../i18n';

type ParamList = {
  Category: {
    category: TodoCategoryProps;
  };
};

const EditCategory = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<ParamList, 'Category'>>();
  const category: TodoCategoryProps = params.category;
  const onSubmit = ({title, description}: NotesProps) => {
    category.title = title.trim();
    category.description = description.trim();
    if (category.title) {
      categoryStore.saveCategory(category);
      navigation.navigate('Home');
    }
  };
  return (
    <View>
      <Header title={i18n.t('editCategory')} />
      <NotePad
        titlePlaceholder={i18n.t('title')}
        descriptionPlaceholder={i18n.t('description')}
        submitText={i18n.t('saveCategory')}
        onSubmit={onSubmit}
        title={category.title}
        description={category.description}
      />
    </View>
  );
};

export default EditCategory;
