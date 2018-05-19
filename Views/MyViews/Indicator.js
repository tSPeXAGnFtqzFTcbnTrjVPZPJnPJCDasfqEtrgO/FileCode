import React ,{Component} from 'react'
import{
    ActivityIndicator,
    StyleSheet,
    View,
}from 'react-native'

export default class Indicator extends Component{

    render(){
        return(
            <View style = {[styles.container,styles.horizontal]}>
                <ActivityIndicator size = "large" color="blue" animating={false}/>
                <ActivityIndicator size = "large" color="green" />
                <ActivityIndicator size = "small" color="black"/>
                <ActivityIndicator size = "large" color="yellow"/>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
        
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      }
})