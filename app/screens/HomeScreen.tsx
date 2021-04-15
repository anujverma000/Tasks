import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, FAB} from '../components';
import {TodoCategoryProps} from '../types';
import {TodoList, TodoCategoryList} from '../views';

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#f4f4f5',
    flex: 1,
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<TodoCategoryProps>();
  return (
    <View style={styles.container}>
      <Header title="Your Tasks" />
      <TodoCategoryList onCategoryChange={setSelectedCategory} />
      <TodoList todoCategory={selectedCategory} />
      <FAB
        label="Add a new Task"
        onPress={() => navigation.navigate('AddTask', {selectedCategory})}
      />
    </View>
  );
};

export default HomeScreen;
