/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler';
import Onboarding from "./src/screens/auth/onboarding";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/Signin";

const Stack= createStackNavigator();
function App(): JSX.Element {

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name={'Onboarding'} component={Onboarding}/>
          <Stack.Screen name={'SignIn'} component={SignIn}/>
          <Stack.Screen name={'SignUp'} component={SignUp}/>

        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
