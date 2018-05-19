import React, { Component } from 'react'
import {
    View,
    Text,
    ViewPagerAndroid,
    StyleSheet,

} from 'react-native'

export default class MyViewPage extends Component {


    render() {
        let arrPage = [];
        for (let i = 1; i <= 10; i++) {
            arrPage.push(
                <View style={styles.pageStyle} key={i}>
                    <Text style={styles.text}>Page {i}</Text>
                </View>
            )
        }

        return (

            <View style={styles.container}>
                <ViewPagerAndroid
                    style={styles.viewPager}
                    initialPage={0}
                    scrollEnabled={true}
                    onPageScroll={(evt) => {
                        console.log("offset: " + evt.nativeEvent.offset);
                        console.log("pos: " + evt.nativeEvent.position);
                    }}

                >
                    {arrPage}
                </ViewPagerAndroid>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewPager: {
        flex: 1,
        backgroundColor: 'gray',
    },
    pageStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 30,
        color: '#3CE9C7'
    }
})