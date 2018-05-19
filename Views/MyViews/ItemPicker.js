import React, { Component } from 'react'
import {
    View,
    Text,
    Picker,
} from 'react-native'

export default class ItemPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: "js"
        }
    }

    render() {

        let arr = [];
        for (let i = 0; i <= 5; i++) {
            let lb = 'label' + i;
            let vl = 'value ' + i;
            arr.push(<Picker label={lb} value={vl} key={i} />)
        }
        return (
            <View style={{ flexDirection: 'row', backgroundColor: 'green', paddingLeft: 20 }}>
                <Text>{this.state.val}</Text>
                <Picker
                    selectedValue={this.state.val}
                    style={{ width: 50, height: 50 }}
                    onValueChange={(itemVal, itemIndex) => { this.setState({ val: itemVal }) }}
                    mode='dropdown'
                >
                    <Picker.Item label='Java' value='java' />
                    <Picker.Item label='Javscript' value='js' />
                    {arr}
                </Picker>
            </View>
        )
    }
}