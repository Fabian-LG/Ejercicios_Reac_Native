import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/'
import { useNavigation } from '@react-navigation/native'


const Estanque = (estan, idS) => {

    const navigation = useNavigation();

    const estanque = estan['estan'];
    const idsEc = idS
    const cAcum = estanque.aAcumulado;
    const cbiomas = estanque.biomasa;
    const cid = estanque.id;
    const csalinidad = estanque.salinidad;
    const detalluki = 'jelouWorld!'


    return (
        <Pressable onPress={() => navigation.navigate('detalle', { detalles: estanque })}
            style={({ pressed }) => [{
                backgroundColor: pressed ? 'rgb(210, 230, 255)'
                    : 'white',
                margin: 5,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: '#864607',
                justifyContent: 'space-between',
                height: 65,
                backgroundColor: '#EEFDFF',
                marginVertical: 3
            }]}>

            <View style={[styles.root, { alignItems: 'flex-end' }]}>
                <View style={styles.estanque}>
                    <Text style={styles.text}>Estanque {estanque.id}</Text>
                </View>
                <View style={styles.arrow}>
                <FontAwesomeIcon icon={faCircleArrowRight} size={50} color='#e47911' />
                </View>

            </View>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    estanque: {
        alignSelf: 'center',
        paddingStart: 75,
        justifyContent: 'space-between',
        fontSize: 30,
        
    },
    arrow: {
        marginTop: 5,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    text: {
        fontSize: 30,
    },
})

export default Estanque