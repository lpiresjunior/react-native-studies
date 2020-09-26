import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import AboutScreen from '../pages/AboutScreen';
import {Button, Text, Image} from 'react-native';

const MainStack = createStackNavigator();

export default () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: '#8E8E8E',
        },
        headerTitleStyle: {
          color: '#000',
          fontSize: 16,
        },
      }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Exercícios',
        }}
      />
      <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>
  );
};
