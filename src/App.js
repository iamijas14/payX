import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Components/Splash';
import PaymentPage from './Components/PaymentPage';

const App = () => {

  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Splash'
          screenOptions= {{
            headerShown: false
          }} 
        >
            <RootStack.Screen 
                name= 'Splash'
                component={Splash}
            />

            <RootStack.Screen 
                name= 'PaymentPage'
                component={PaymentPage}
            />

        </RootStack.Navigator>
     </NavigationContainer>
  );
};

export default App;
