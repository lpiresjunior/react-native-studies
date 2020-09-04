import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function SeriesSearch () {
  const navigation = useNavigation()

  return (
    <View>
      <Text>SobreSearch</Text>
      <Button
        title='Séries'
        onPress={() => navigation.navigate('Series')}
      />
    </View>
  )
}
