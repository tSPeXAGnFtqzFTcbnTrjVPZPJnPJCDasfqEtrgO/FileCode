import React,{Component} from 'react'
import{
    View,
    Text,
    ToolbarAndroid,
    StyleSheet,
}from 'react-native'

export default class MyToolBar extends Component{

    render(){
        return(
            <View style={myStyle.container}>
                <ToolbarAndroid
    
                    style={myStyle.toolbar} 
                    navIcon={require("../Drawable/icon.png")}
                    title={"AwesomeApp"}
                    actions={[{title:'Setting',icon:require('../Drawable/setting.png'),show:'always'}]}
                    onActionSelected={this.onActionSelected}
                />
            </View>
        )
    }

    onActionSelected(position){

    }
}

const myStyle = StyleSheet.create({
    container:{
        //  flex: 1,
        //  justifyContent: 'flex-start',
        //  alignItems: 'stretch',
         //backgroundColor:'yellow',
    },
    toolbar:{
        height: 60,
        backgroundColor: 'gray',
        alignSelf: 'stretch',
        
    }
})
