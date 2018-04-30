import React, { Component } from 'react'
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation'

import Home from './screen/Home'
import Menu from './screen/Menu'
import User from './screen/User'
import Details from './screen/Details'

export const HomeStack = StackNavigator({
    
    Home_Screen: {
        screen: Home,
        navigationOptions:{

        }
        
    },
    Menu_Screen: {
        screen: Menu
    },
    Details_Screen: {
        screen: Details,
    },
})
export const UserStack = StackNavigator({
    User_Screen: {
        screen: User,
        navigationOptions:{
            
        }
    },
    
    
})
export const TabBar = TabNavigator({
    Home_Scr: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'HOME',
            
        }
    },
    Users: {
        screen: UserStack
    }
}, {

        tabBarPosition:'top',
        
        tabBarOptions: {
            style: {
                backgroundColor: '#FFFFFF'
            },
            activeTintColor:'#1FF14B',
            inactiveTintColor:'#0D1C10',
            
        }
    })