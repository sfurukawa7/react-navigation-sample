import { createStackNavigator } from '@react-navigation/stack';
import CardDetail from '../screens/CardDetail';
import CardEdit from '../screens/CardEdit';
import CardEditSuccess from '../screens/CardEditSuccess';
import RootTabNavigator from './RootTabNavigator';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='RootTab'>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name='RootTab' component={RootTabNavigator} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name='CardDetail' component={CardDetail} />
        <Stack.Screen name='CardEdit' component={CardEdit} />
        <Stack.Screen name='CardEditSuccess' component={CardEditSuccess} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
