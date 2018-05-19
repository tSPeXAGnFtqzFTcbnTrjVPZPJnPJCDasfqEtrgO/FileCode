import React,{Component} from 'react'
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  AppRegistry,
}from'react-native'

export default class App extends Component{

  _onPress(){
    console.log('pressed!');
  }
  render(){
    return(
      <TouchableOpacity 
        accessible={true}
        accessibilityLabel={'Tap me!'}
        onPress={this._onPress}
      >
        
          <Text style={myStyle.cusText}>Text 1</Text>
          <Text style={myStyle.cusText}>Text 2</Text>

      </TouchableOpacity>
    )
  }
}

const myStyle = StyleSheet.create({
  cusText:{
    fontSize:20,
    alignItems:'center',
    
  }
})
AppRegistry.registerComponent('Appn',()=>App);