import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native'
import {SideMenu} from "../router";

export default class Home extends Component {
    static navigationOptions = {
        title:'Trang chu'
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>
                    Home
                </Text>
                <TouchableOpacity style={{ backgroundColor: '#1CED38' }}
                onPress = {()=> {this.props.navigation.navigate('Details_Screen',{thamso:'xxx'})}}>

                    <Text style={{ fontSize: 25, color: '#fff' }}>
                        Go to Details
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#ed3e3e' }}
                                  onPress = {()=> {this.props.navigation.navigate('DrawerOpen')}}>

                    <Text style={{ fontSize: 25, color: '#fff' }}>
                        Show menu
                    </Text>

                </TouchableOpacity>
            </View>
        )
    }
}