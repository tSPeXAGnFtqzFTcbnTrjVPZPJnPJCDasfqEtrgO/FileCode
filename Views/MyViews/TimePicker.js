import React, { Component } from 'react'
import {
    TimePickerAndroid,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

export default class TimePicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds()
        }
    }
    componentWillMount() {
        clearInterval(this.timer);
    }
    componentDidMount() {
        this.timer = setInterval(() => this._elapsing(), 1000);
    }

    _elapsing() {
        let { hour, minute, second } = this.state;

        second = (second + 1) % 60;
        if (second == 0) minute = (minute + 1) % 60;
        if (minute == 0) hour = (hour + 1) % 24

        this.setState({
            hour: hour,
            minute: minute,
            second: second
        })
    }
    async _onClick() {
        try {
            const { action, hour, minute } = await TimePickerAndroid.open({
                hour: this.state.hour,
                minute: this.state.minute,
                is24Hour: true
            })
            if (action !== TimePickerAndroid.dismissedAction) {
                this.setState({
                    hour: hour,
                    minute: minute
                })
            }
        } catch ({ code, message }) {
            console.log("error timepick: ", message);
        }
    }


    render() {
        return (
            <View >
                <TouchableOpacity onPress={()=>this._onClick()}>
                    <Text>{this.state.hour}:{this.state.minute}:{this.state.second}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}