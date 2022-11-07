import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardList from '../screens/HomeTab/CardList';
import Settings from '../screens/HomeTab/Settings';
import { RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='CardList'>
      <Tab.Screen name='CardList' component={CardList} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  );
};

export default RootTabNavigator;
