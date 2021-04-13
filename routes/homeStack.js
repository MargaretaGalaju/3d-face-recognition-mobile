import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/LockScreen';
import LockScreen from '../screens/LockScreen';

const screens = {
    LockScreen: {
        screen: LockScreen,
        navigationOptions: {
            title: 'BookShell',
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'AVAILABLE BOOKS',
        }
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTitleStyle: {
            alignSelf: 'center',
            backgroundColor: '#88C5CC',
            fontFamily: 'montserrat-regular',
        },
        headerStyle: {
            backgroundColor: '#88C5CC',
        }
    }
});

export default createAppContainer(HomeStack);