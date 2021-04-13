import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About GameZone',
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