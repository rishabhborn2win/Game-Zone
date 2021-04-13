import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import React from 'react'
import Header from "../shared/header";

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            headerTitle: () => <Header />,
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#ccc'}
    }
});

export default AboutStack
