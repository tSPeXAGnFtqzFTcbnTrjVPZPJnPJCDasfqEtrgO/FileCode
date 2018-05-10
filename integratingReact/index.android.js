/*
* http://easings.net/vi
* http://cubic-bezier.com
* using 'useNativeDriver' in timing with 'Transform' to smooth
* */

import React, { Component } from 'react'
import {
    Animated,
    AppRegistry,
    View,
    Text,
    Easing,
    ToastAndroid,
    NativeModules,

} from 'react-native'
import ToastExample from './ToastExample';

//const {IntermediateClass} = NativeModules.IntermediateClass;


export default class App extends Component {
    
    render() {
        ToastExample.show("asdf",ToastExample.LONG);
        ToastExample.measureLayout(
            2,
            (succ)=>{
                console.log(1 + succ);
            },
            (fail)=>{
                console.log(2 + fail);
            }
        )
      //ToastAndroid.show("ssss",ToastAndroid.SHORT);
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <Text style={{marginTop:30}}>xxx</Text>

            </View>
        )
    }

}

AppRegistry.registerComponent('integratingReact', () => App);
