import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AddCategory, AddTask} from '../screens';
import {TodoCategoryProps} from '../types';

type RootStackParamList = {
  Home: {category: TodoCategoryProps};
  AddTask: {selectedCategory: TodoCategoryProps};
  AddCategory: {};
};

const RootStack = createStackNavigator<RootStackParamList>();

export interface RootNaviagtionProps {
  params: {category: TodoCategoryProps};
}

const RootNaviagtion = ({params}: RootNaviagtionProps) => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode={'none'} initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={params}
        />
        <RootStack.Screen name="AddTask" component={AddTask} />
        <RootStack.Screen name="AddCategory" component={AddCategory} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNaviagtion;
