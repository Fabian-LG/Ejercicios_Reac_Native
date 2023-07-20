import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/'
import {useNavigation} from '@react-navigation/native'


const Copia = (copy) => {

    const navigation = useNavigation();

    const estanque = copy.route.params.copy
  console.log(estanque)


    return (
        <Pressable >
            
            <View style={styles.root}>
                <View style={styles.estanque}>

                    <Text style={styles.text}>Estanque </Text>
                    
                    <View style={styles.arrow}>
                    <FontAwesomeIcon icon={faArrowRight} size={70} />
                </View>
                </View>
                
            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
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
        justifyContent: 'space-between'
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
})

export default Copia