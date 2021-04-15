import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TodoCategoryProps} from '../types';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF6A6F',
    padding: 16,
    marginVertical: 12,
    marginHorizontal: 4,
    width: 120,
    height: 80,
    borderRadius: 6,
    elevation: 1,
  },
  selectedContainer: {
    height: 120,
    shadowColor: '#ff4a73',
  },
  title: {
    fontSize: 14,
    color: '#8C8080',
  },
  selectedTitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    color: '#aba2a3',
  },
  selectedCount: {
    color: 'white',
  },
});

interface TodoCategoryDisplyProps extends TodoCategoryProps {
  selected: boolean;
}
const TodoCategory = ({
  title,
  taskCount,
  selected,
}: TodoCategoryDisplyProps) => {
  const gradientColors = selected
    ? ['#fe9168', '#ff4a73']
    : ['#ffffff', '#f2f2f2'];

  return (
    <LinearGradient
      colors={gradientColors}
      style={[styles.container, selected ? styles.selectedContainer : {}]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <Text style={[styles.title, selected ? styles.selectedTitle : {}]}>
        {title}
      </Text>
      <Text style={[styles.count, selected ? styles.selectedCount : {}]}>
        {taskCount}
      </Text>
    </LinearGradient>
  );
};

export default TodoCategory;
