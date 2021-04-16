import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  AddCategory,
  AddTask,
  EditTask,
  EditCategory,
} from '../screens';
import {TodoCategoryProps, TodoProps} from '../types';
import ChangeLanguage, {LANG_TYPE} from '../screens/ChangeLanguage';

type RootStackParamList = {
  Home: {category: TodoCategoryProps};
  AddTask: {selectedCategory: TodoCategoryProps};
  EditTask: {todo: TodoProps};
  AddCategory: {};
  ChangeLanguage: {lang: LANG_TYPE};
  EditCategory: {category: TodoCategoryProps};
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
        <RootStack.Screen name="EditTask" component={EditTask} />
        <RootStack.Screen name="AddCategory" component={AddCategory} />
        <RootStack.Screen name="EditCategory" component={EditCategory} />
        <RootStack.Screen name="ChangeLanguage" component={ChangeLanguage} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNaviagtion;
