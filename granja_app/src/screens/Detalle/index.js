import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faWind, faTemperatureHalf, faWeight, faBowlRice, faFileLines, faCircleArrowLeft, faSquare, faVial, faHillRockslide } from '@fortawesome/free-solid-svg-icons/'
import { useNavigation } from '@react-navigation/native'

const DetalleScreen = (detalles) => {

    const navigation = useNavigation();
    const det = detalles.route.params.detalles

    const alAcum = det["aAcumulado"]
    const alSem = det["aSemanal"]
    const biom = det["biomasa"]
    const o2a = det["o2Am"]
    const o2p = det["o2Pm"]
    const pHe = det["pH"]
    const salinid = det["salinidad"]
    const tcA = det["tCAm"]
    const tcP = det["tCPm"]

    console.log("Avers")
    console.log(det["aAcumulado"])


    return (

        <SafeAreaView style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                <FontAwesomeIcon icon={faCircleArrowLeft} size={20} color='#e47911' />
                <Text style={{ fontSize: 10, color: '#e47911' }}>   Regresar</Text>
            </TouchableOpacity>

            <View style={styles.titContenedor}>
                <FontAwesomeIcon icon={faFileLines} size={20} color='#e47911' />
                <Text style={styles.titulo}>Detalles </Text>
            </View>


            <View style={styles.topSide}>
                <Text style={styles.encabezadoA}>Semana <Text style={styles.encabezadoB}>1</Text></Text>
                <Text style={styles.encabezadoA}> Seccion <Text style={styles.encabezadoB}>AB</Text></Text>
                <Text style={styles.encabezadoA}> Estanque <Text style={styles.encabezadoB}>1</Text></Text>
            </View>

            <View style={styles.body}>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faWind} size={25} color='#5B330C' />
                    <Text style={styles.filatext}>  O2 am: </Text>
                    <Text style={styles.filatextB}>{o2a}</Text>
                </View>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faWind} size={25} color='#5B330C' />
                    <Text style={styles.filatext}>  O2 pm: </Text>
                    <Text style={styles.filatextB}>{o2p}</Text>
                </View>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faTemperatureHalf} size={25} color='#5B330C' />
                    <Text style={styles.filatext}>  T°C am: </Text>
                    <Text style={styles.filatextB}> {tcA}</Text>                
                </View>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faTemperatureHalf} size={25} color='#5B330C' />
                    <Text style={styles.filatext}>  T°C pm: </Text>
                    <Text style={styles.filatextB}> {tcP}</Text>                
                </View>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faHillRockslide} size={25} transform={{ rotate: -40 }} color='#5B330C' />
                    <Text style={styles.filatext}>  Salinidad: </Text>
                    <Text style={styles.filatextB}>{salinid}</Text>
                </View>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faVial} size={25} color='#5B330C' />
                    <Text style={styles.filatext}>  Ph: </Text>
                    <Text style={styles.filatextB}>{pHe}</Text>
                </View>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faWeight} size={25} color='#5B330C' />
                    <Text style={styles.filatext}>  Biomasa: </Text>
                    <Text style={styles.filatextB}>{biom}</Text>
                </View>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faBowlRice} size={25} color='#5B330C' />
                    <Text style={styles.filatext}>  Alimento semanal: </Text>
                    <Text style={styles.filatextB}>{alSem} kg</Text>
                </View>

                <View style={styles.fila}>
                    <FontAwesomeIcon icon={faBowlRice} size={25} color='#5B330C' />
                    <Text style={styles.filatext}>  Alimento acumulado: </Text>
                    <Text style={styles.filatextB}>{alAcum} kg</Text>
                </View>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginStart: 20,
        marginEnd: 20
    },
    encabezadoA: {
        fontSize: 17,
        fontWeight: '600',
    },
    encabezadoB: {
        fontSize: 17,
        color: '#5B330C',
        //textDecorationLine: 'underline',
        //textDecorationColor: '#5B330C',
    },
    body: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 35,
        margin: 5,
        borderWidth: 3,
        borderColor: '#864607',
        borderRadius: 5
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
        //borderTopWidth: 1,
        padding: 7,
        margin: 7,
        marginVertical: 10
    },
    filatext: {
        fontSize: 22,
    },
    filatextB: {
        fontSize: 22,
        color: '#5B330C',
    },
    horario: {

    },
    back: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,

    }, titContenedor: {
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
});

export default DetalleScreen