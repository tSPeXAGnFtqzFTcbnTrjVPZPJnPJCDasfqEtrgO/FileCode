import React, { Component } from 'react'
import {
    View,
    Text,
    StatusBar,
    
} from 'react-native'

export default class MyStatusBar extends Component {

    render() {
        return (
            <View>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                    translucent={false}
                />
                
                
            </View>
        )
    }
}