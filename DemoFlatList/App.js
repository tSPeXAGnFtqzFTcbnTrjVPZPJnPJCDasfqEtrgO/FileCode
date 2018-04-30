import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    AppRegistry,
    TouchableOpacity,
} from 'react-native'

export default class App extends Component {
    constructor(props) {
        super(props);
        console.log("cons");
        this.state = {
            arr: [],
            refresh: false,
            txtv: 'none'
        }
    }

    render() {
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.refs.listSinger.scrollToEnd()
                    }}>
                        <Text>
                            {this.state.txtv}
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList

                    ref = 'listSinger'
                    onEndReachedThreshold={-0.2}
                    onEndReached={() => {
                        this.setState({
                            txtv: 'loaded',
                        })
                    }}

                    refreshing={this.state.refresh}
                    onRefresh={() => this.refreshes()}

                    data={this.state.arr}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            onPress={()=>alert(item.Name)}
                            style={myStyle.row}>
                            <View style={myStyle._left}>
                                <Image source={{uri: item.Hinh}} style={{flex: 1}}/>
                            </View>

                            <View style={myStyle._right}>
                                <Text>
                                    {item.Name}
                                </Text>
                                <Text>
                                    {item.MoTa}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    }
                    horizontal={false}
                    numColumns={1}

                />
            </View>
        )
    }

    refreshes() {
        this.setState({
            refresh: true,
        })
        console.log('fetching');
        fetch("http://192.168.1.104:1000/dbs")
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    arr: responseJSON,
                    refresh: false,
                });
            })
            .catch((e) => console.log("error: " + e));
    }

    componentDidMount() {

        console.log('fetching');
        fetch("http://192.168.1.104:1000/dbs")
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    arr: responseJSON,
                });
            })
            .catch((e) => console.log("error: " + e));
    }

}

const myStyle = StyleSheet.create({

    row: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 20,
        borderRightWidth: 1,
    },
    _left: {
        flex: 3,
    },
    _right: {
        flex: 5,
        padding: 15,
        borderWidth: 2,
        borderRadius: 45,
        margin: 10,
        alignItems: "center",
    },


})

AppRegistry.registerComponent("aaa", () => App)
