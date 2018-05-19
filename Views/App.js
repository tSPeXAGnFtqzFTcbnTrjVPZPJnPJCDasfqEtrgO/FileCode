import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  DrawerLayoutAndroid,
} from 'react-native'

import Indicator from './MyViews/Indicator'
import DatePicker from './MyViews/DatePicker'
import TimePicker from './MyViews/TimePicker'
import MyImage from './MyViews/CustomImage'
import ModalExample from './MyViews/Modal'
import ItemPicker from './MyViews/ItemPicker'
import MyProgressBar from './MyViews/MyProgressBar'
import MySlider from './MyViews/MySlider'
import MyStatusBar from './MyViews/MyStatusBar'
import MySwitch from './MyViews/MySwitch'
import MyToolBar from './MyViews/MyToolsBar'
import MyViewPager from './MyViews/MyViewPager'
export default class App extends Component {

  render() {

    var navigationView = (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text style={{ margin: 10, fontSize: 15, textAlign: 'left' }}>I'm in the Drawer!</Text>
      </View>
    );

    return (


      
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
      >
        <View style={styles.container}>
          <MyStatusBar />
          <MyViewPager />

          <Indicator />
          <DatePicker />

          <TimePicker />
          <MyImage />
          <ModalExample />

          <ItemPicker />
          <MyProgressBar />
          <MySlider />


          <MySwitch />
          <MyToolBar />

        
        </View>
      </DrawerLayoutAndroid>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
  }
})