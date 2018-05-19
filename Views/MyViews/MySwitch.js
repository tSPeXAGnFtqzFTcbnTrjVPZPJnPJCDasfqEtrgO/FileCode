import React,{Component} from 'react'
import{
    View,
    Text,
    Switch,
}from 'react-native'

export default class MySwitch extends Component{
    constructor(props){
        super(props);
        this.state=({
            isChoose: false
        })
    }

    onChange(val){
        this.setState({
            isChoose:val
        })
    }
    render(){

        return(
            <View style={{flexDirection:'row'}}>
                <Switch
                    value={this.state.isChoose}
                    onValueChange={this.onChange.bind(this)}
                    onTintColor={"red"}
                    thumbTintColor={"blue"}
                    
                />
                <Text style={{ marginLeft: 10}}>{String(this.state.isChoose)}</Text>
            </View>
        )
    }
}