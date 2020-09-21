import React, { useState } from 'react'
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native'

const App = () => {
  // email: suporte@b7web.com.br
  // senha: 1234

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [status, setStatus] = useState('')
  const [showCupom, setShowCupom] = useState(false)

  const handleVerifyLogin = async () => {
    setStatus('')
    setShowCupom(false)

    // eslint-disable-next-line no-undef
    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await req.json()

    if (json.status === 'ok') {
      setStatus('Acesso LIBERADO!')
      setShowCupom(true)
    } else {
      setStatus('Acesso Negado')
      setShowCupom(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Super Cupom</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite seu e-mail'
        value={email}
        onChangeText={t => setEmail(t)}
      />

      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        value={password}
        onChangeText={t => setPassword(t)}
        secureTextEntry={true}
      />

      <Button title='Entrar' onPress={handleVerifyLogin} />

      <Text style={styles.status}>{status}</Text>

      {showCupom &&
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}>Código de Cupom:</Text>
          <Text style={styles.cupomCode}>JDHD743F</Text>
        </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20
  },
  header: {
    color: '#FFF',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30
  },
  input: {
    height: 45,
    fontSize: 18,
    color: '#FFF',
    backgroundColor: '#555',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  status: {
    margin: 50,
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center'
  },
  cupomArea: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 30
  },
  cupomTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },
  cupomCode: {
    textAlign: 'center',
    fontSize: 40
  }
})

export default App
