import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowCircleRight, faArrowRight, faArrowRightFromBracket, faArrowRightFromFile, faArrowRightLong, faArrowRightRotate, faArrowRightToBracket, faArrowRightToCity, faArrowRightToFile, faArrowTurnRight, faBuildingCircleArrowRight, faCircleArrowRight, faLongArrowRight, faPersonWalkingDashedLineArrowRight, faSquareArrowUpRight, faSquareUpRight, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'
import { database } from '../../config/fb'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'


const Semana = (semanas) => {

  const navigation = useNavigation();

  const week = semanas['semanas']
  //console.log(semanas)
  const semanuki = week['id']
  //const numSemana = semanuki[7]
  const numSemana = semanuki.slice(7,9)
  const diasSemanaReplace = semanuki.replaceAll('_', ' ')
  const diasSemana = diasSemanaReplace.slice(10)
  //console.log(diasSemana.slice(9));
  //console.log(semanuki[7]) 

  return (
    <SafeAreaView>
      <Pressable onPress={() => navigation.navigate('seccion', { secciones: semanuki })}

        style={({ pressed }) => [{
          backgroundColor: pressed ? 'rgb(210, 230, 255)'
            : 'white',
          marginVertical: 2,
          marginHorizontal: 5
        }] }>
        <View style={styles.root}>
          <View style={styles.estanque}>
            <Text style={styles.text}>Semana {numSemana}</Text>
            <Text >{diasSemana}</Text>
            { /*<Text style={styles.numEstanque}>Num. estanques:</Text> */}
          </View>
          <View style={styles.arrow}>
            <FontAwesomeIcon icon={faCircleArrowRight} size={50} color='#e47911' />
          </View>
        </View>

        
      </Pressable>

  
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  boton: {
    margin: 5
  },
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#864607',
    justifyContent: 'space-between',
    height: 65,
    backgroundColor: '#EEFDFF',
    marginVertical: 3
  },
  estanque: {
    alignSelf: 'center',
    paddingStart: 75,
    fontSize: 30, 
  },
  arrow: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
  },
  numEstanque: {
    fontSize: 15
  },
})
export default Semana


/*
    <View>
        <FontAwesomeIcon icon={faArrowRightFromBracket} size={70}/>
        <FontAwesomeIcon icon={faArrowRightFromFile} size={70}/>
        <FontAwesomeIcon icon={faArrowRightLong} size={70}/>
        <FontAwesomeIcon icon={faArrowRightRotate} size={70}/>
        <FontAwesomeIcon icon={faArrowRightToBracket} size={70}/>
        <FontAwesomeIcon icon={faArrowRightToCity} size={70}/>
        <FontAwesomeIcon icon={faArrowRightToFile} size={70}/>
        <FontAwesomeIcon icon={faArrowTurnRight} size={70}/>
        <FontAwesomeIcon icon={faArrowCircleRight} size={70}/>
        <FontAwesomeIcon icon={faTruckArrowRight} size={70}/>
        <FontAwesomeIcon icon={faPersonWalkingDashedLineArrowRight} size={70}/>
        <FontAwesomeIcon icon={faBuildingCircleArrowRight} size={70}/>
        <FontAwesomeIcon icon={faCircleArrowRight} size={70}/>
        <FontAwesomeIcon icon={faLongArrowRight} size={70}/>
        <FontAwesomeIcon icon={faArrowRight} size={70}/>
      </View>
*/