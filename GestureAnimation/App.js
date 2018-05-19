import React, {Component}from'react'

import{
 View,
 AppRegistry
}from 'react-native'

import ResponeView from './Features/responeView'
import GestureRotate from './Features/gestureRotate'
export default class App extends Component{

  render(){
    console.log('xxx');
    return(
      <View style={{
        flex: 1,
        alignItems:'stretch',
        justifyContent:'center',
        backgroundColor:'lightblue'
      }}>
        <ResponeView/>
        <GestureRotate/>
        
      </View>
    )
  }
}

AppRegistry.registerComponent("Appn",()=>App);