import React, { Component } from 'react'
import {
    DatePickerAndroid,
    View,
    TouchableOpacity,
    Text,
} from 'react-native'


export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            day: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear()
        }
    }
    async _onClick() {
        try {
            const { action,year,month,day } = await DatePickerAndroid.open({
                date: new Date(this.state.year, this.state.month, this.state.day)
                
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                
                console.log("d:" + day + " m:" + month + " y:" + year);
                this.setState({
                    day: day,
                    month: month + 1,
                    year: year
                })
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress = {()=>this._onClick()} >
                    <Text>{this.state.day}/{this.state.month}/{this.state.year}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}