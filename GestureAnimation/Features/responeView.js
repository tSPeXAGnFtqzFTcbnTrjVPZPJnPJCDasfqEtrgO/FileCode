import React, { Component } from 'react'
import {
    View,
    Animated,

} from 'react-native'

export default class ResponeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: null,
            y: null,
            marginLeft: new Animated.Value(0),
            marginTop: new Animated.Value(0),
        }
    }

    onPress(evt) {
        const { locationX, locationY } = evt.nativeEvent;
        this.setState({ x: locationX, y: locationY });
        console.log('x: ' + locationX + ' y: ' + locationY);
    }

    onMove(evt) {
        const { locationX, locationY } = evt.nativeEvent;
        const { x, y } = this.state;
        const marginLeft = new Animated.Value(locationX - x);
        const marginTop = new Animated.Value(locationY - y);

        this.setState({ marginLeft, marginTop });

        console.log('moving');
    }
    onRelease(evt) {
        console.log('release');
        const left = Animated.timing(
            this.state.marginLeft,
            {
                toValue: 0,
                duration: 1000,
            }
        );
        const top = Animated.timing(
            this.state.marginTop,
            {
                toValue: 0,
                duration: 1000,
            }
        );
        Animated.parallel([left, top]).start();
    }
    render() {
        const { marginLeft, marginTop } = this.state;
        return (
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={this.onPress.bind(this)}
                onResponderMove={this.onMove.bind(this)}
                onResponderRelease={this.onRelease.bind(this)}

                style={{
                    flex: 1,
                    backgroundColor: 'green',
                }}
            >

                <Animated.Image
                    source={require('../drawable/pic.png')}
                    style={{
                        marginLeft: marginLeft, marginTop: marginTop,
                        width: 100, height: 100,
                    }}
                >

                </Animated.Image>
            </View>
        )
    }

}