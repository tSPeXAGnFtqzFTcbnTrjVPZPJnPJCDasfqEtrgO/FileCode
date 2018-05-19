import React, { Component } from 'react'
import {

  View,
  Text,
  AppRegistry,
  InteractionManager,
} from 'react-native'

class Timers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      elapsed: 0,
    }
  }

  componentWillMount() {
    clearInterval(this.timer)
  }
  componentDidMount() {
    this.timer = setInterval(() => this.onTick(), 50);
    setImmediate(()=>{console.log('immerdiate')});
    //this.timer = setInterval(()=>{this.setState({elapsed:new Date() - this.props.start})}, 50);
  }

  onTick() {
    this.setState({
      elapsed: this.state.elapsed + 50
    });
    console.log(this.state.elapsed)
  }

  render() {
    let elapsed = Math.round(this.state.elapsed / 1000);
    let second = (Math.round(this.state.elapsed / 100) % 10)
    return (
      <View>
        <Text>This was started {elapsed}.{second} </Text>
      </View>
    )
  }
}

export default class App extends Component {

  render() {

    return (
      <View>
        <Text>sss</Text>
        <Timers start={Date.now()} />

      </View>
    )
  }
}

AppRegistry.registerComponent('Appn', () => App);