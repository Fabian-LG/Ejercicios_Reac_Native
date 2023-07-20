import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { database } from './src/config/fb';
import { collection, addDoc, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import React, {useEffect, useState} from 'react';

export default function App() {

  const [newItem, setNewItem]= useState({
    emoji: '*',
    name: 'jelou',
    price: 0,
    isSold: false,
    createAt: new Date(),
  })

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const collectionRef = collection(database, 'products');
    const q = query(collectionRef, orderBy('createAt', 'desc'))

    const unsuscribe = onSnapshot(q, QuerySnapshot => {
      setProducts(
        QuerySnapshot.docs.map(doc => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createAt: doc.data().createAt
        }))
      )
    })

    return unsuscribe;
  }, []);

  console.log(products);

  const onSend = async()=>{
    try{
      await addDoc(collection(database, 'products'), newItem);
      console.log('Cargado...')
    } catch(e){
      console.log('ahora salio: ')
    }
    
  }
  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
