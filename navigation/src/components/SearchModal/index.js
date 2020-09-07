import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import styled from 'styled-components/native'

const Modal = styled.Modal``

const Container = styled.View`
  padding: 10px;
`

const ModalArea = styled.View`
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 15px;
  padding: 10px;
`

const CloseModal = styled.Button``

const ModalInput = styled.TextInput`
  font-size: 24px;
`

export default function SearchModal (props) {
  const [value, setValue] = useState('')

  const navigation = useNavigation()

  const closeModal = () => {
    props.closeModal()
    setValue('')
  }

  const searchMovie = () => {
    navigation.navigate('SearchMovies', { movie: value })
    closeModal()
  }

  return (
    <Modal
      style={{ padding: 20 }}
      visible={props.modalVisible}
      animationType='fade'
      transparent={true}
    >
      <Container style={{ padding: 10 }}>
        <ModalArea>
          <CloseModal title='Fechar' onPress={closeModal}/>
          <ModalInput
            onSubmitEditing={searchMovie}
            placeholder='Pesquise um Filme...'
            onChangeText={text => setValue(text)}
            value={value}
          />
        </ModalArea>
      </Container>
    </Modal>

  )
}
