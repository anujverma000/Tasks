import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TodoProps} from '../types';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#8C8080',
  },
  descripton: {
    fontSize: 14,
    color: '#aba2a3',
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});

const Todo = (todo: TodoProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, todo.completed ? styles.completed : {}]}>
        {todo.title}
      </Text>
      {todo.description ? (
        <Text
          style={[styles.descripton, todo.completed ? styles.completed : {}]}>
          {todo.description}
        </Text>
      ) : null}
    </View>
  );
};

export default Todo;
