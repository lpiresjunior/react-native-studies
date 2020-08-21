import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Text, Switch, Button, Alert } from 'react-native'
import { Picker } from '@react-native-community/picker'
import Slider from '@react-native-community/slider'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sexo: '',
      nome: '',
      idade: '',
      limite: 0,
      estudante: false
    }
  }

  render () {
    return (
      <View style={styles.container}>

        <Text style={{ textAlign: 'center', fontSize: 28, fontWeight: 'bold' }}>Input Bank</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          onChangeText={text => this.setState({ nome: text })}
          value={this.state.nome}
          placeholder={'Nome'}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
          onChangeText={text => this.setState({ idade: text })}
          value={this.state.idade}
          placeholder={'Idade'}
          keyboardType={'numeric'}
          keyboardAppearance={'dark'}
        />

        <Picker
          style={{ marginBottom: 10 }}
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sexo: itemValue })
          }>
          <Picker.Item label="selecione seu sexo" value="" />
          <Picker.Item label="masculino" value="masculino" />
          <Picker.Item label="feminino" value="feminino" />
        </Picker>

        <Text>Escolha seu Limite:</Text>

        <Slider
          // style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={3500}
          onValueChange={(valor) => this.setState({ limite: valor })}
        />

        <Text style={{ marginBottom: 10 }}>R${this.state.limite.toFixed(2)}</Text>

        <View style={styles.estudante}>
          <Text style={{ width: 125 }}>{this.state.estudante ? 'Sou estudante' : 'Não sou estudante'}</Text>

          <Switch
            // trackColor={{ false: '#767577', true: '#81b0ff' }}
            // thumbColor={this.state.estudante ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={(valor) => this.state.estudante ? this.setState({ estudante: false }) : this.setState({ estudante: true })}
            value={this.state.estudante}
          />

        </View>

        <Button
          title="enviar"
          onPress={() => alert(`
          nome: ${this.state.nome}
          idade: ${this.state.idade}
          sexo: ${this.state.sexo}
          limite: R$${this.state.limite.toFixed(2)}
          ${this.state.estudante ? 'estudante' : 'não é estudante'}
        `)}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  estudante: {
    flexDirection: 'row'
  }
})

export default App
