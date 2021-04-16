import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {TodoCategoryProps, TodoProps} from '../types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  descContainer: {
    flexBasis: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  desc: {
    fontSize: 12,
    color: '#aba2a3',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8C8080',
  },
  taskCounts: {
    padding: 8,
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  editCategory: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  total: {
    fontSize: 14,
    color: '#8C8080',
  },
  completed: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8C8080',
  },
  divider: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8C8080',
  },
});

interface Props {
  category: TodoCategoryProps;
  todos: TodoProps[];
}

const CategoryView = ({category, todos}: Props) => {
  const completedTodos: number = todos.filter(todo => todo.completed).length;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <Text style={styles.title}>{category.title}</Text>
        {category.description ? (
          <Text numberOfLines={2} style={styles.desc}>
            {category.description}
          </Text>
        ) : null}
      </View>
      <View style={styles.taskCounts}>
        <Text style={styles.completed}>{completedTodos}</Text>
        <Text style={styles.divider}>/</Text>
        <Text style={styles.total}>{todos.length}</Text>
      </View>
      <View style={styles.editCategory}>
        <Pressable
          onPress={() => navigation.navigate('EditCategory', {category})}>
          <Icon name="pencil-square-o" size={24} color="#8C8080" />
        </Pressable>
      </View>
    </View>
  );
};

export default CategoryView;
