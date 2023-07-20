import React from 'react';
import Home from '../screens/Home';
import Historico from '../screens/Historico';
import Estanques from '../screens/Historico/Estanques.js';
import Seccion from '../components/seccion';
import DetalleScreen from '../screens/Detalle/index'
import Copia from '../components/copia';
import InicioSesion from '../screens/InicioSesion/index';
import NuevoUsuario from '../screens/NuevoUsuario';
import CrearUsuario from '../screens/CrearUsuario';
import Otro from '../screens/Otro'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen component={Home} name='HomeScreen' />
        <Stack.Screen component={InicioSesion} name='profile' />
        <Stack.Screen component={Historico} name='secciones' />
        <Stack.Screen component={Estanques} name='estanques' />
        <Stack.Screen component={Seccion} name='seccion' />
        <Stack.Screen component={DetalleScreen} name='detalle' />
        <Stack.Screen component={Copia} name='copia' />
        <Stack.Screen component={NuevoUsuario} name='nUsuario' />
        <Stack.Screen component={CrearUsuario} name='cUsuario' />
        <Stack.Screen component={Otro} name="otr" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeStack;