import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabHomeScreen from '../pages/TabHomeScreen';
import TabAboutScreen from '../pages/TabAboutScreen';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator>
    <Tab.Screen name="TabHome" component={TabHomeScreen} />
    <Tab.Screen name="TabAbout" component={TabAboutScreen} />
  </Tab.Navigator>
);
