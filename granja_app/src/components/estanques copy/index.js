import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/'
import { database } from '../../config/fb'
import { collection, onSnapshot, query } from 'firebase/firestore'




const Estanque = (estan) => {

    const estanque = estan['estan'];
    

    return (
        <Pressable onPress={()=>console.log(estanque)}>
            <View style={styles.root}>
                <View style={styles.estanque}>
                    
                    <Text style={styles.text}>Estanque {estanque.id}</Text>
                    <View style={styles.datos}>
                        <Text>Datos:</Text>
                        <Text>Oxigenacion: {estanque.oxigeno}°C</Text>
                        <Text>Biomasa: {estanque.biomasa}</Text>
                        <Text>salinidad: {estanque.salinidad}</Text>
                        <Text>Alimento: {estanque.alimento} kg</Text>
                    </View>
                </View>
                <View style={styles.arrow}>
                    <FontAwesomeIcon icon={faArrowRight} size={70} />
                </View>
            </View>

        </Pressable>
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
})

export default Estanque