import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShrimp, faClipboardList, faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import AppNav from '../screens/Navegacion/AppNav';
import Historico from '../screens/Historico'
import NuevoRegistro from '../screens/NuevoRegistro/index.js';
import Profile from '../screens/Profile/Index';
import DetalleScreen from '../screens/Detalle';
import Estanques from '../screens/Historico/Estanques.js';



const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarInactiveTintColor: '#ffbd7d',
      tabBarActiveTintColor: '#e47911',
      tabBarShowLabel: false,
    }}>

      <Tab.Screen component={Historico} name='hist'
        options={{ tabBarIcon: ({ color }) => (<FontAwesomeIcon icon={faShrimp} size={30} transform={{ rotate: 35 }} color={color} />), }} />

      <Tab.Screen component={NuevoRegistro} name='nuevo'
        options={{ tabBarIcon: ({ color }) => (<FontAwesomeIcon icon={faClipboardList} size={30} color={color} />), }} />

      <Tab.Screen component={Profile} name='Perfil'
        options={{ tabBarIcon: ({ color }) => (<FontAwesomeIcon icon={faUser} size={30} color={color} />), }} />
    </Tab.Navigator>
  )
}

export default BottomTab


/*
<Tab.Screen component={Profile} name='Perfil'
        options={{ tabBarIcon: ({ color }) => (<FontAwesomeIcon icon={faBars} size={30} color={color} />), }} />
*/