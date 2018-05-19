import React,{Component} from 'react'

import{
    View,
    Text,
    ProgressBarAndroid,
    SafeAreaView
}from 'react-native'

export default class MyProgressBar extends Component{
    constructor(props){
        super(props);
        this.state={
            progress:0.4
        }
    }
    componentDidMount(){
        clearInterval(this.timer);
    }
    componentDidMount(){
        this.timer = setInterval(()=>this._onTick(),200);
    }

    _onTick(){
        let {progress} = this.state;
        progress = progress+0.1
        if(progress>1) progress=0;
        this.setState({
            progress:progress
        })
       // console.log(progress);
    }

    render(){
        return(
            <SafeAreaView>
                <ProgressBarAndroid
                    backgroundColor={'yellow'}
                    styleAttr={'Horizontal'}
                    indeterminate={false}
                    width={300}
                    height={100}
                    marginLeft={20}
                    progress={this.state.progress}
                    borderWidth={20}
                    borderColor={'black'}
                    color={'green'}
                />

            </SafeAreaView>
        )
    }
}