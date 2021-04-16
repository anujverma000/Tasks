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
    borderRadius: 6,
    elevation: 1,
  },
  selectedContainer: {
    paddingBottom: 42,
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
});

export interface TodoCategoryDisplyProps extends TodoCategoryProps {
  selected: boolean;
}
const TodoCategory = ({title, selected}: TodoCategoryDisplyProps) => {
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
    </LinearGradient>
  );
};

export default TodoCategory;
