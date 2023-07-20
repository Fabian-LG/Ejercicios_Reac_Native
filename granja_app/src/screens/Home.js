import { View, Text, SafeAreaView, Button } from 'react-native';
import React from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faShrimp } from '@fortawesome/free-solid-svg-icons/faShrimp'
import {useNavigation} from '@react-navigation/native'



const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1, justifyContent: 'center'}}>
    <View style={{alignItems: 'center', justifyContent:'flex-end'}}>
      <Text>Home Screen</Text>
      <Button title='Perfil?'
      onPress={()=> navigation.navigate('profile')}/>
      <FontAwesomeIcon icon={ faShrimp } size={55} transform={{rotate: 45}} />
      

    
    </View>
    </SafeAreaView>
  )
}



export default Home