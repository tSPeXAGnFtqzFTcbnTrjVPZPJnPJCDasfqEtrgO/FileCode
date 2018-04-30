/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {
    AppRegistry,
    Button,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'


import {TabBar} from './src/router'


export default class Media extends Component {
    render() {
        return (
            
            <View style={{flex: 1}}>
                <TabBar/>
            </View>

        )
    }
}

AppRegistry.registerComponent('Media', () => Media)