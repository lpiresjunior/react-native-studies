import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';

const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0000FF',
        },
        headerTitleStyle: {
          color: '#FFF',
          fontSize: 16,
        },
      }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
        }}
      />
      <MainStack.Screen
        name="About"
        component={AboutScreen}
        options={({route}) => ({
          title: route.params?.name,
        })}
      />
    </MainStack.Navigator>
  );
};
