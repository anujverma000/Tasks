import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, AddCategory, AddTask} from './app/screens';

const Stack = createStackNavigator();

export interface AppProps {}

class App extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
  }

  public render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddTask" component={AddTask} />
          <Stack.Screen name="AddCategory" component={AddCategory} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
