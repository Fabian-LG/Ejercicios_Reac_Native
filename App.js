import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView , View} from 'react-native';
import React from 'react';
import Router from './src/Router'
import Estanques from './src/screens/Historico/Estanques.js';
import DetalleScreen from './src/screens/Detalle';
import Semana from './src/components/semana';
import InicioSesion from './src/screens/InicioSesion/index'
import NuevoUsuario from './src/screens/NuevoUsuario';
import CrearUsuario from './src/screens/CrearUsuario';
import Otro from './src/screens/Otro'
import AppNav from './src/screens/Navegacion/AppNav';
import SelectingOptions from './src/screens/NuevoRegistro/index.js';




export default function App() {

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <AppNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
