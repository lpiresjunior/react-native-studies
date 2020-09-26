import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused}) => {
        let imgSource = null;

        switch (route.name) {
          case 'TabHome':
            imgSource = require('../assets/home.png');
            break;
          case 'TabAbout':
            imgSource = require('../assets/interface.png');
            break;
        }

        return <Image source={imgSource} style={{width: 32, height: 32}} />;
      },
    })}
    tabBarOptions={{
      keyboardHidesTabBar: true,
    }}>
    <Tab.Screen
      name="TabHome"
      component={TabHomeScreen}
      options={{tabBarLabel: 'Home'}}
    />
    <Tab.Screen
      name="TabAbout"
      component={TabAboutScreen}
      options={{tabBarLabel: 'Sobre'}}
    />
  </Tab.Navigator>
);
