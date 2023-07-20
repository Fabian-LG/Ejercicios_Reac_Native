import { View, Text,Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from 'expo-blur';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/fb'
import {useNavigation} from '@react-navigation/native'


const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg';
const profilePic='https://pbs.twimg.com/profile_images/1310537745052446720/IHkpsbX4_400x400.jpg'

const InicioSesion = () => {
  
  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log('Account created!')
      const user = userCredential.user;
      console.log(user)
    }).catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log('Signed In!')
      const user = userCredential.user;
      console.log(user)
      Alert.alert('Usted se ha logeado correctamente')
    }).catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: uri}} style={[styles.image, StyleSheet.absoluteFill]}/>

      <ScrollView contentContainerStyle={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <BlurView intensity={90}>
          <View style={styles.login}>
            <Image source={{uri: profilePic}} style={styles.profilePicture} />

            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>E-mail</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='somenema@gmail.com'/>
            </View>

            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Password</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='password' secureTextEntry={true}/>
            </View>

            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: '#6792F090'}]}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Create Account</Text>
            </TouchableOpacity>

          </View>
        </BlurView>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },

  login:{
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    alignItems: 'center'
  },
  profilePicture:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff90'
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#00CFEB90',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
})
export default InicioSesion