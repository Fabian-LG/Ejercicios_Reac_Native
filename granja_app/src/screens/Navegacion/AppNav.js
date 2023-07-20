import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioSesion from '../InicioSesion';
import NuevoUsuario from '../NuevoUsuario';
import Historico from '../Historico';
import Estanques from '../Historico/Estanques.js';
import Seccion from '../../components/seccion';
import DetalleScreen from '../Detalle';
import Home from '../Home';
import BottomTab from '../../Router/BottomTab';
import Profile from '../Profile/Index';



function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla de inicio (Home Screen)</Text>
            <Button
                title='Ir a detalles'
                onPress={() => navigation.navigate('Inicio')} />
        </View>
    );
}


function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Pantalla de detalles</Text>
        </View>
    );
}

const Stack = createStackNavigator();


export default function AppNav() {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Inicio"
            screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detalles" component={DetalleScreen} />
                <Stack.Screen name="Inicio" component={InicioSesion} />
                <Stack.Screen name="Usuario" component={NuevoUsuario} />
                <Stack.Screen name="Perfil" component={Profile} />
                <Stack.Screen component={Home} name='HomeScreen' />
                <Stack.Screen component={Historico} name='secciones' />
                <Stack.Screen component={Estanques} name='estanques' />
                <Stack.Screen component={Seccion} name='seccion' />
                <Stack.Screen component={DetalleScreen} name='detalle' />
                <Stack.Screen name="Bottom" component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
