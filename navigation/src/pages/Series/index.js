import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Series () {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Séries</Text>
      <Button
        title='Pesquisar Séries'
        onPress={() => navigation.navigate('SeriesSearch')}
      />
    </View>
  )
}
