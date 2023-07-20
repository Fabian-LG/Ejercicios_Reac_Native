import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './BottomTab';


const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={BottomTab} name='Home Tabs'/>
            
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default index