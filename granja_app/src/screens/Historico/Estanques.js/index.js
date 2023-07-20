import { View, Text, StyleSheet, Pressable, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import Estanque from '../../../components/estanques'
import { database } from '../../../config/fb'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native'
import { faArrowRight, faSquare, faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'


const Estanques = (est, idsec) => {

  const navigation = useNavigation();
  const vieneEst = est.route.params.estan
  const vieneIdSe = idsec

  const seccionE = vieneEst
  console.log("vieneEst")
  console.log(vieneIdSe)

  const [estanques, setEstanques] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, '2022', 'semana_5_28-31_agosto_1-3_septiembre', 'seccionAb');
    const q = query(collectionRef)

    const unsuscribe = onSnapshot(q, QuerySnapshot => {
      setEstanques(
        QuerySnapshot.docs.map(doc => ({
          id: doc.id,
          aAcumulado: doc.data().alimentoAcumulado,
          aSemanal: doc.data().alimentoSemanal,
          biomasa: doc.data().biomasa,
          o2Am: doc.data().o2Am,
          o2Pm: doc.data().o2Pm,
          pH: doc.data().pH,
          salinidad: doc.data().salinidad,
          tCAm: doc.data().tCAm,
          tCPm: doc.data().tCPm,
        }))
      )
    })

    return unsuscribe;
  }, []);

  console.log('Los productos')
  console.log(estanques)

  return (
    <SafeAreaView>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <FontAwesomeIcon icon={faCircleArrowLeft} size={20} color='#e47911' />
        <Text style={{ fontSize: 10, color: '#e47911' }}>   Regresar</Text>
      </TouchableOpacity>

      <View style={styles.titContenedor}>
        <FontAwesomeIcon icon={faSquare} size={20} color='#e47911' />
        <Text style={styles.titulo}>Seccion {seccionE}</Text>
      </View>


      <FlatList
        data={estanques}
        renderItem={({ item }) => <Estanque estan={item} />} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d1d1d1',
    backgroundColor: '#fff',


  },
  estanque: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 35,
    fontSize: 30,
  },
  arrow: {
    backgroundColor: '#FFD8E5',
    width: 80,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
  },
  datos: {
    fontSize: 15,
    flexDirection: 'column'
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,

  },titContenedor: {
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

export default Estanques