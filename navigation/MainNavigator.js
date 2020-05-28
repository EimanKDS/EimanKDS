import { createStackNavigator, } from 'react-navigation'

import SearchScreen from '../screens/SearchScreen'
import DetailScreen from '../screens/DetailScreen'
import ExtraScreen from '../screens/ExtraScreen'

const MainNavigator = createStackNavigator({
    Search: SearchScreen,
    Detail : DetailScreen,
    Extra: ExtraScreen,
})

export default MainNavigator