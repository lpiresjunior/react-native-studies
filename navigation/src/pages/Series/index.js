import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Series () {
  const navigation = useNavigation()

  return (
    <View style={{ backgroundColor: '#1D1D27', flex: 1 }}>
      <Text style={{ color: '#fff' }}>Séries</Text>
      <Button
        title='Pesquisar Séries'
        onPress={() => navigation.navigate('SeriesSearch')}
      />

      <Button
        title='Lista de Séries'
        onPress={() => navigation.navigate('SeriesList')}
      />
    </View>
  )
}
