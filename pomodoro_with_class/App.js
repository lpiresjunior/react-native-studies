import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      minutes: 25,
      seconds: 0,
      button: 'INICIAR',
      type: 'POMODORO',
      pomodoros: 1
    }

    this.timer = null

    this.setPomodoro = this.setPomodoro.bind(this)
    this.setBreak = this.setBreak.bind(this)
    this.setLongBreak = this.setLongBreak.bind(this)

    this.start = this.start.bind(this)
    this.clean = this.clean.bind(this)
  }

  setPomodoro () {
    this.setState({
      type: 'POMODORO',
      minutes: 25,
      seconds: 0
    })
  }

  setBreak () {
    this.setState({
      type: 'INTERVALO',
      minutes: 5,
      seconds: 0
    })
  }

  setLongBreak () {
    this.setState({
      type: 'INTERVALO-LONGO',
      minutes: 15,
      seconds: 0
    })
  }

  start () {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null

      this.setState({ button: 'DESPAUSAR' })
    } else {
      this.timer = setInterval(() => {
        if (this.state.seconds === 0) {
          this.setState({ seconds: 60 })
          this.setState({ minutes: this.state.minutes - 1 })
        }
        this.setState({ seconds: this.state.seconds - 1 })

        if (this.state.minutes === -1 && this.state.type === 'POMODORO' && this.state.pomodoros < 4) {
          clearInterval(this.timer)
          this.timer = null

          this.setState({
            minutes: 5,
            seconds: 0,
            type: 'INTERVALO',
            pomodoros: this.state.pomodoros + 1
          })

          this.start()
        }

        if (this.state.minutes === -1 && this.state.type === 'POMODORO' && this.state.pomodoros === 4) {
          clearInterval(this.timer)
          this.timer = null

          this.setState({
            minutes: 15,
            seconds: 0,
            type: 'INTERVALO-LONGO',
            pomodoros: 0
          })

          this.start()
        }

        if (this.state.minutes === -1 && this.state.type === 'INTERVALO') {
          clearInterval(this.timer)
          this.timer = null

          this.setState({
            minutes: 25,
            seconds: 0,
            type: 'POMODORO'
          })

          this.start()
        }

        if (this.state.minutes === -1 && this.state.type === 'INTERVALO-LONGO') {
          clearInterval(this.timer)
          this.timer = null

          this.setState({
            minutes: 25,
            seconds: 0,
            type: 'POMODORO'
          })

          this.start()
        }
      }, 1000)

      this.setState({ button: 'PAUSAR' })
    }
  }

  clean () {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      minutes: 25,
      seconds: 0,
      button: 'INICIAR',
      type: 'POMODORO',
      pomodoros: 1
    })
  }

  render () {
    return (
      <View style={styles.container}>

        <View style={styles.btnArea1}>

          <TouchableOpacity style={styles.btn1} onPress={this.setPomodoro}>
            <Text style={styles.btnTexto1}>Pomodoro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn1} onPress={this.setBreak}>
            <Text style={styles.btnTexto1}>Intervalo</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn1} onPress={this.setLongBreak}>
            <Text style={styles.btnTexto1}>Intervalo longo</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.title}>
          <Text style={styles.titleText}>
            {this.state.type}
          </Text>
        </View>

        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>
          {this.state.minutes < 10
            ? '0' + this.state.minutes
            : this.state.minutes}:
          {this.state.seconds < 10
            ? '0' + this.state.seconds
            : this.state.seconds}
        </Text>

        <View style={styles.btnArea2}>

          <TouchableOpacity style={styles.btn2} onPress={this.start}>
            <Text style={styles.btnTexto2}> {this.state.button} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn2} onPress={this.clean}>
            <Text style={styles.btnTexto2}>PARAR</Text>
          </TouchableOpacity>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B2D42'
  },
  btnArea1: {
    flexDirection: 'row'
  },
  btn1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 5,
    marginBottom: 10,
    borderRadius: 9
  },
  btnTexto1: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2B2D42'
  },
  title: {
    marginBottom: 40
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFF'
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea2: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2B2D42'
  }
})

export default App
