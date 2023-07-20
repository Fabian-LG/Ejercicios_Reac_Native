import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight, faSquare, faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'


const Seccion = (secciones) => {

  const navigation = useNavigation();

  const idSeccion = secciones.route.params.secciones
  const idSect = idSeccion.slice(7,9)
  console.log(idSect)

  const seccion = ['ab', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


  return (
    <SafeAreaView>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <FontAwesomeIcon icon={faCircleArrowLeft} size={20} color='#e47911' />
        <Text style={{ fontSize: 10, color: '#e47911' }}>   Regresar</Text>
      </TouchableOpacity>

      <View style={styles.titContenedor}>
        <FontAwesomeIcon icon={faSquare} size={20} color='#e47911' />
        <Text style={styles.titulo}>Secciones</Text>
      </View>

      <ScrollView>
        {seccion.map((data, i) => {
          return (
            <Pressable onPress={() => navigation.navigate('estanques', { estan: data, idSect })}
              style={({ pressed }) => [{
                backgroundColor: pressed ? 'rgb(210, 230, 255)'
                  : 'white',
                margin: 5,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#864607',
                justifyContent: 'space-between',
                height: 65,
                backgroundColor: '#EEFDFF',
                marginVertical: 3
              }]}>

              <View style={[styles.root, { alignItems: 'flex-end' }]}>
                <View style={styles.estanque}>
                  <Text style={styles.text}>Seccion {data}</Text>
                  { /*<Text style={styles.numEstanque}>Num. estanques:</Text> */}
                </View>
                <View style={styles.arrow}>
                  <FontAwesomeIcon icon={faCircleArrowRight} size={50} color='#e47911' />
                </View>
              </View>
            </Pressable>
          )
        })}

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  boton: {
    margin: 5
  },
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'

  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,

  },
  estanque: {
    alignSelf: 'center',
    paddingStart: 75,
    justifyContent: 'space-between',
    fontSize: 30,

  },
  arrow: {
    marginTop: 5,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  numEstanque: {
    fontSize: 15
  },
  titContenedor: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: 250,
    height: 50,
    borderColor: '#864607',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5

  },
  titulo: {
    fontSize: 20,
    fontWeight: '400',
    color: '#864607',
    paddingLeft: 10

  },
})
export default Seccion