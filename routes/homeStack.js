import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import React from 'react'
import Header from "../shared/header";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) =>  {
            return {
            headerTitle: () => <Header navigation={navigation} title='GameZone' />,
            }
        }
    },
    ReviewDetails: {
        screen : ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
            headerStyle: { backgroundColor: '#eee'}

        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ccc'}
    }
});

export default HomeStack
