import { View, Text, StyleSheet, Pressable, FlatList, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Semana from '../../components/semana'
import semana from '../../data/secciones'
import { database } from '../../config/fb'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { auth } from '../../config/fb'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import Seccion from '../../components/seccion'



const Historico = () => {

  const navigation = useNavigation();

  const seccion = ['A', 'B', 'C', 'D', 'E'];



  const datos = new Array(100)
    .fill(null)
    .map((v, i) => ({ key: i.toString(), value: `Eleemento ${i}` }));

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, '2022');
    const q = query(collectionRef)

    const unsuscribe = onSnapshot(q, QuerySnapshot => {
      setProducts(
        QuerySnapshot.docs.map(doc => ({
          id: doc.id
        }))
      )
    })

    return unsuscribe;
  }, []);

  console.log('Los productos')
  console.log(products)

  return (

    <SafeAreaView style={styles.contenedor}>

      <View style={styles.titContenedor}>

        <FontAwesomeIcon icon={faCalendarWeek} size={20} color='#e47911' />

        <Text style={styles.titulo}>Semanas 2022</Text>
      </View>


      <ScrollView>

        <View style={styles.lista}>
          <FlatList
            data={products}
            renderItem={({ item }) => <Semana semanas={item} />} />

        </View>

        <View style={styles.boton}>
          <TouchableOpacity onPress={() => auth.signOut().then(() => console.log('User signed out'))} >
            <Text style={styles.text}>Nuevo Registro</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    marginTop: 50,
    
  },
  root: {
    flexDirection: 'row',
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d1d1d1',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
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
  lista: {
    margin: 5
  },
  estanque: {
    alignSelf: 'center',
    paddingStart: 75,
    fontSize: 30
  },
  arrow: {
    backgroundColor: '#FFD8E5',
    width: 80,
    borderColor: '#d1d1d1',
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#864607'
  },
  boton: {
    marginTop: 10,
    marginBottom: 60,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    backgroundColor: '#E29244',
    width: '50%',
    height: 40,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#864607',

  }
})

export default Historico


/*
 {[0,1,2,3,4].map((e,i) => 
      
       <Pressable>  
       <View style={styles.root}>
       <Text style={styles.text}>{`${e} -${i}`}</Text>
       </View>
       </Pressable>
      )}
*/


/*
<FlatList 
      data={secciones}
      renderItem={({item})=> 
      <Pressable onPress={()=>navigation.navigate('estanques')}>
        <View style={styles.root}>
          <View style={styles.estanque}>
          <Text style={styles.text}>{item.value}</Text>
          </View>
        <View style={styles.arrow}>
        <FontAwesomeIcon icon={ faArrowRight } size={70} />
        </View>
        </View>
       
      </Pressable>}/>
*/