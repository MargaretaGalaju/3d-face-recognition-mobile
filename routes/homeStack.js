import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import AlertScreen from '../screens/AlertScreen';
import LockScreen from '../screens/LockScreen';

const screens = {
    LockScreen: {
        screen: LockScreen,
        navigationOptions: {
            title: 'Welcome',
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'History of activity',
        }
    },
    AlertScreen: {
        screen: AlertScreen,
        navigationOptions: {
            title: 'ALERT',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleStyle: {
            alignSelf: 'center',
            color: '#ffffff',
            backgroundColor: '#88C5CC',
            fontFamily: 'montserrat-regular',
        },
        headerStyle: {
            backgroundColor: '#88C5CC',
        }
    }
});

export default createAppContainer(HomeStack);