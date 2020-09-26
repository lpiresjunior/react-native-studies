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
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#66FF66',
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
          headerTitle: () => (
            <Image
              style={{width: 150, height: 45}}
              source={{uri: 'https://www.google.com.br/google.jpg'}}
            />
          ),
          headerRight: () => <Button title="opa" onPress={() => alert('oi')} />,
        }}
      />
      <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>
  );
};
