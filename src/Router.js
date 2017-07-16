import { StackNavigator } from 'react-navigation';
import MainScreen from './screens/MainScreen';

const Router = StackNavigator({
    Home: {
        screen: MainScreen
    }
});

export default Router;
