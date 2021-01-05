
import React from 'react';
import onboarding from './screens/onboarding';
import Home from './screens/Home';
import Details from './screens/Details';
import login from './screens/login';
import signup from './screens/signup';
import product from './components/product';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'; */
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen name="signup" component ={signup} options={{headerShown: false}}/>
      <Stack.Screen name="login" component ={login} options={{headerShown: false}}/>
        <Stack.Screen name="onboarding" component={onboarding} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}} />
        <Stack.Screen name="product" component={product} />
       

        
      </Stack.Navigator>

    </NavigationContainer>

  );
}


