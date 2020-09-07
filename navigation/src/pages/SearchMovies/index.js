import React from 'react'
import { View, Text } from 'react-native'

export default function SearchMovies ({ route }) {
  return (
    <View style={{ backgroundColor: '#1D1D27', flex: 1 }}>
      <Text style={{ fontSize: 24, color: '#FFF', alignSelf: 'center' }}>{route.params.movie}</Text>
    </View>
  )
}
