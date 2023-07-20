import { View, Text,Image, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from 'expo-blur';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/fb'
import {useNavigation} from '@react-navigation/native'



//const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg';
//const uri = 'https://thumbs.dreamstime.com/b/fondo-degradado-azul-y-naranja-hermoso-elegante-ilustración-gráfico-arte-diseño-218553999.jpg'
//const uri = 'https://media.istockphoto.com/id/1094133124/es/foto/resumen-de-desenfoque-de-fondo-degradado-de-azul-y-naranja.jpg?s=170667a&w=0&k=20&c=hmNoSm3QBrfzDpMtR_FdMCHQavdhGElclTDkMMibfqo='
const uri = 'https://thumbs.dreamstime.com/b/fondo-abstracto-en-anaranjado-azul-y-amarillo-37066397.jpg'
const profilePic='https://pbs.twimg.com/profile_images/1310537745052446720/IHkpsbX4_400x400.jpg'

const InicioSesion = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log('Signed In!')
      const user = userCredential.user;
      console.log(user)
      //Alert.alert('Usted se ha logeado correctamente')
      navigation.navigate('Bottom')
    }).catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const salir = ()=>{
    auth.signOut().then(()=> console.log('User signed out'))
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

        <BlurView intensity={90} >
          <View style={styles.login}>
            <Image source={{uri: profilePic}} style={styles.profilePicture} />

            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>E-mail</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='someone@gmail.com'/>
            </View>

            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Password</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='password' secureTextEntry={true}/>
            </View>

            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Usuario')} style={[styles.button, {backgroundColor: '#0D3654B3'}]}>
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
    resizeMode: 'cover',
    alignSelf: 'flex-end'
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
    //backgroundColor: '#00CFEB90',
    backgroundColor: '#BBE7FFB3',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
})
export default InicioSesion