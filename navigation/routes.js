/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Filmes from './src/pages/Filmes'
import Series from './src/pages/Series'
import FilmesSearch from './src/pages/FilmesSearch'
import SeriesSearch from './src/pages/SeriesSearch'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const icons = {
  Filmes: {
    name: 'movie'
  },
  Series: {
    name: 'tv'
  }
}

function Tabs () {
  return (

    <Tab.Navigator
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name]
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      tabBarOptions={{
        style: {
          backgroundColor: '#171718',
          borderColor: '#000'
        },
        activeTintColor: '#FFF',
        inactiveTintColor: '#615B5B'
      }}
    >
      <Tab.Screen name='Filmes' component={Filmes} />
      <Tab.Screen name='Series' component={Series} />
    </Tab.Navigator>

  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="FilmesSearch" component={FilmesSearch} options={{ headerShown: false }} />
        <Stack.Screen name="SeriesSearch" component={SeriesSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
