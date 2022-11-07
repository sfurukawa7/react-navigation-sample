import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import RootStackNavigator from './src/navigation/RootStackNavigator';

const prefix = Linking.createURL('/');
const config = {
  screens: {
    RootTab: {
      path: 'RootTab',
      screens: { CardList: '', Settings: 'settings' }
    },
    CardDetail: 'card-detail/:id',
    CardEdit: 'card-edit'
  }
};

const App = () => {
  const linking = { prefixes: [prefix], config };
  return (
    <NavigationContainer linking={linking}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default App;
