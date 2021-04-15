import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
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

type ParamList = {
  Category: {
    category: TodoCategoryProps;
  };
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute<RouteProp<ParamList, 'Category'>>();
  console.log(params);
  const [selectedCategory, setSelectedCategory] = useState<TodoCategoryProps>(
    params.category,
  );
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
