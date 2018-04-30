/*
* http://easings.net/vi
* http://cubic-bezier.com
* using 'useNativeDriver' in timing with 'Transform' to smooth
* */

import React, {Component} from 'react'
import {
    Animated,
    AppRegistry,
    View,
    Text,
    Easing,

} from 'react-native'

class AnimInterpolation extends Component{
    constructor(props){
        super(props);
        this.state={
            my_marginTop : new Animated.Value(0),
        }
    }

    componentDidMount(){
        Animated.timing(
            this.state.my_marginTop,
            {
                toValue:1,
                duration:2000,
            }
        ).start();
    }

    render(){
        let {my_marginTop} = this.state;
        return(
            <Animated.View style={{
                ...this.props.style,
                marginTop:my_marginTop.interpolate({
                    inputRange:[0,0.2,0.5,1],
                    outputRange:[0,180,120,400],
                }),
                transform:[{
                    scale:my_marginTop.interpolate({
                        inputRange:[0,0.2,0.8,1],
                        outputRange:[1,0.6,0.3,1],
                    })
                }]
            }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

class AnimationScaleSpring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            my_scale: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.spring(
            this.state.my_scale,
            {
                toValue: 1,
                useNativeDriver:true,
                bounciness:30,
                speed:10,
                //easing:Easing.bezier(.07,1.09,.9,0),
            }
        ).start();
    }

    render() {
        let {my_scale} = this.state;

        return (
            <Animated.View style={{
                ...this.props.style,

                transform:[{scale:my_scale}],
            }}
            >
                {this.props.children}
            </Animated.View>
        )
    }

}


class AnimationScale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            my_scale: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.my_scale,
            {
                toValue: 1,
                duration: 5000,
                //easing:Easing.bezier(.07,1.09,.9,0),
            }
        ).start();
    }

    render() {
        let {my_scale} = this.state;

        return (
            <Animated.View style={{
                ...this.props.style,

                transform:[{scale:my_scale}],
            }}
            >
                {this.props.children}
            </Animated.View>
        )
    }

}

class AnimationFade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            my_fade: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.my_fade,
            {
                toValue: 1,
                duration: 5000,
            }
        ).start();
    }

    render() {
        let {my_fade} = this.state;

        return (
            <Animated.View style={{
                ...this.props.style,
                opacity: my_fade
            }}
            >
                {this.props.children}
            </Animated.View>
        )
    }


}

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <AnimInterpolation style={{flex: 1, alignItems: 'center'}}>
                    <View>
                        <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>
                            An dep trai
                        </Text>
                        <Text style={{fontSize: 20, textAlign: 'center', margin: 10}}>
                            Fadding
                        </Text>

                    </View>

                </AnimInterpolation>
                {/*<View style={{marginTop:30}}>xxx</View>*/}

            </View>
        )
    }

}

AppRegistry.registerComponent('App', () => App);