import React,{Component}  from 'react'
import{
    Text,
    View,
}from'react-native'

export default class Details extends Component{
    static navigationOptions = {
        title:'Details',
        headerLeft: null,
    }

    render(){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text>{this.props.navigation.state.params.thamso}</Text>
            </View>
        )
    }
}