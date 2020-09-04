import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function FilmesSearch () {
  const navigation = useNavigation()

  return (
    <View>
      <Text>FilmesSearch</Text>
      <Button
        title='Filmes'
        onPress={() => navigation.navigate('Filmes')}
      />
    </View>
  )
}
