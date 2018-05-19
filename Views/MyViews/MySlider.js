import React,{Component} from 'react'
import{
    View,
    Text,
    Slider,
    
}from 'react-native'

export default class MySlider extends Component{
    constructor(props){
        super(props);
        this.state=({
            curVal : 4,
        })
    }
    render(){
        return(
            <View style={{flexDirection:'row'}}>
                <Slider
                    maximumValue={10}
                    minimumValue={0}
                    value={this.state.curVal}
                    style={{flex:6}}
                    onValueChange={(val)=>{this.setState({
                        curVal:val
                    })}}
                />  
                <Text style={{flex:2, marginLeft: 10}}>{this.state.curVal}</Text>
            </View>
        )
    }
}
