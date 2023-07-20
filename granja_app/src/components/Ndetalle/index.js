import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'


const Ndetalle = (props) => {

  //const detalluki = secciones
  console.log('detalliko ' + props)
    
  return (
    <SafeAreaView>
       <Pressable 

       style={({pressed})=>[{
        backgroundColor: pressed ? 'rgb(210, 230, 255)'
        : 'white',
        margin:5
       }]}>
        <View style={styles.root}>
          <View style={styles.estanque}>
          <Text style={styles.text}>Semana</Text>
          
          { /*<Text style={styles.numEstanque}>Num. estanques:</Text> */}
          </View>
        <View style={styles.arrow}>
        <FontAwesomeIcon icon={ faArrowRight } size={70} />
        </View>
        </View>
       
      </Pressable>

      <View>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    boton:{
    margin: 5
    },
    root: {
      flexDirection: 'row',
      borderWidth: 1,
      
      borderRadius: 10,
      borderColor: '#d1d1d1',
      justifyContent: 'space-between',
  },
  estanque:{
    alignSelf: 'center',
    paddingStart: 75,
    fontSize: 30
  },
  arrow:{
    backgroundColor: '#FFD8E5',
    width: 80,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 10,
  },
  text:{
    fontSize: 30,
  },
  numEstanque:{
    fontSize: 15
  },
  })
export default Ndetalle