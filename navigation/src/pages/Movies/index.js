import React, { useState } from 'react'
import { Text, Button, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import SearchModal from '../../components/SearchModal'

export default function Movies (props) {
  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => {
    setModalVisible(!modalVisible)
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#1D1D27' }}>
      <Text style={{ color: '#fff' }}>Filmes</Text>

      {/* abrir o modal */}
      <Button
        title='Pesquisar Filmes'
        onPress={() => { setModalVisible(true) }}
      />

      <Button
        title='Lista de Filmes'
        onPress={() => navigation.navigate('MoviesList')}
      />

      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>
      <Text>ausihdasu ihdui sahudihasuhduihsauihduisa d sauhd usahduisah</Text>

      <SearchModal
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
    </ScrollView>
  )
}
