import {useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useState, useCallback} from 'react';
import {StyleSheet, ScrollView, Text, Pressable} from 'react-native';
import TodoCategory from '../components/TodoCategory';
import {categoryStore} from '../storage';
import {TodoCategoryProps} from '../types';
import i18n from '../i18n';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 140,
    flexGrow: 0,
  },
  addCategory: {
    backgroundColor: '#FFF',
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 4,
    width: 130,
    height: 80,
    borderRadius: 6,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 24,
  },
  label: {
    fontSize: 14,
    color: '#8C8080',
  },
});

interface TodoCategoryListProps {
  onCategoryChange: (props: TodoCategoryProps) => void;
}

const TodoCategoryList = ({onCategoryChange}: TodoCategoryListProps) => {
  const [selected, setSelected] = useState<number>(0);
  const navigation = useNavigation();
  const [todoCategories, setTodoCategories] = useState<TodoCategoryProps[]>([]);
  useFocusEffect(
    useCallback(() => {
      categoryStore.getAllCategories().then(setTodoCategories);
    }, []),
  );

  const selectCategory = ({
    index,
    todoCategory,
  }: {
    index: number;
    todoCategory: TodoCategoryProps;
  }) => {
    setSelected(index);
    onCategoryChange(todoCategory);
  };
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {todoCategories.map((todoCategory, index) => (
        <Pressable
          key={todoCategory.id}
          onPress={() => selectCategory({index, todoCategory})}>
          <TodoCategory {...todoCategory} selected={index === selected} />
        </Pressable>
      ))}
      <Pressable
        style={styles.addCategory}
        onPress={() => navigation.navigate('AddCategory')}>
        <Text style={styles.label}>+ {i18n.t('addCategory')}</Text>
      </Pressable>
    </ScrollView>
  );
};

export default TodoCategoryList;
