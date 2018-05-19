import React, { Component } from 'react'

import {
    View,
    Image,
    Animated,
} from 'react-native'
import * from './Feature/NameImage'

const NUM_PIC = 3;
export default class GestureRotate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            rotate: new Animated.Value(1),
            index: 1,
        }
    }

    onPress(evt) {
        const { locationX, locationY } = evt.nativeEvent;

    }
    onMove(evt) {
        const { locationX, locationY } = evt.nativeEvent;


    }
    onRelease(evt) {
        const { locationX, locationY } = evt.nativeEvent;
    }
    render() {

        let arr = [];
        let dir = '../drawable/'
        for (let i = 1; i <= NUM_PIC; i++) {
            let x = require('../drawable');
            const dir_temp = '../drawable/' + i + '.png';

            arr.push(x['1.png']);
            console.log(arr[i - 1]);
        }

        const _rotate = this.state.rotate.interpolate({
            inputRange: [-1, 1],
            outputRange: ['-20deg', '20deg'],
        })
        return (
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={this.onPress.bind(this)}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}
                style={{
                    flex: 1,
                    backgroundColor: 'black',
                }}
            >
                <Animated.Image
                    //source={require(dir + 0 + '.png')}
                    source={arr[0]}
                    style={{
                        width: 100, height: 100,
                        transform: [{ rotate: _rotate }]
                    }}
                />


            </View>
        )
    }

}