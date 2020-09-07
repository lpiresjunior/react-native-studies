import React from 'react'
import { View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SearchMovies () {
  const navigation = useNavigation()

  return (
    <View style={{ backgroundColor: '#1D1D27', flex: 1 }}>
      <Button
        title='Filmes'
        onPress={() => navigation.navigate('Movies')}
      />
    </View>
  )
}
