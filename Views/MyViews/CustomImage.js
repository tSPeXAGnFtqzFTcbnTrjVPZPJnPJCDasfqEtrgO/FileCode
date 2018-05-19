import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    
} from 'react-native'

var arr = [];
var requireMethod = require;

export default class MyImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            link: require("../Drawable/dog1.png"),
            index: 0,
        }
    }

    componentWillMount() {
        let uri = "../Drawable/";
        let name = "dog";
        for (let i = 1; i <= 2; i++) {
            const t = uri.concat(name.concat(String(i) + ".png"));
            console.log(t);
            arr.push(t);
        }
    }
    _onClick() {
        const index = (this.state.index+1)%2;
        const s = String(arr[index]);
        console.log(s);
        
        this.setState({
          //  link: require(s),
            index: index
        })
    }

    render() {

        return (
            <View>
                <TouchableOpacity onPress={() => this._onClick()}>
                    <Image
                        style={{
                            backgroundColor:'black',
                             width: 200, height: 200,resizeMode:'cover'
                         }}
                        source={this.state.link} />
                </TouchableOpacity>
            </View>
        )
    }
}



const myStyle = StyleSheet.create({
    
})