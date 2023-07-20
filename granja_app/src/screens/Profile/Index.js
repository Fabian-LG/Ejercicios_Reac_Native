import { StyleSheet, View, Text, Button, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import estilos from './estilos'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faIdCard, faUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { database } from '../../config/fb';
import { collection, onSnapshot, query } from 'firebase/firestore'
import { auth } from '../../config/fb';


const Profile = ({ navigation }) => {
    
    const [products, setProducts] = useState();

    useEffect(() => {
        const collectionRef = collection(database, 'usuarios');
        const q = query(collectionRef)

        const unsuscribe = onSnapshot(q, QuerySnapshot => {
            setProducts(
                QuerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    email: doc.data().email,
                    fecha: doc.data().fecha,
                    nombre: doc.data().nombre,
                    password: doc.data().password
                }))
            )
        })

        return unsuscribe;
    }, []);



    console.log('Los productos')
    console.log(products)

    
    const usuarioP = products[3]
    const emailP = usuarioP["email"]
    const nameP = usuarioP["nombre"]
    const dateP = usuarioP["fecha"]
    const passwordP = usuarioP["password"]

    const oculto = passwordP.replaceAll(passwordP, '*******')

    console.log(usuarioP)
    console.log(emailP)
    console.log(nameP)
    console.log(dateP)
    console.log(passwordP)  

    const [pOculto, setPoculto] = useState(true);

    const presionar = () => {
        console.log('Presionado')
    }

    const ocultarPw = () => {
        if (pOculto == false) {
            setPoculto(true);
        } else {
            setPoculto(false);
        }
    }

    const cerrarSesion = () => {
        auth.signOut().then(()=> console.log('User signed out'))
        navigation.navigate('Inicio')
    }

    return (
        <SafeAreaView style={estilos.container}>

            <View style={estilos.titContenedor}>

                <FontAwesomeIcon icon={faIdCard} size={20} color='#e47911' />
                <Text style={estilos.titulo}>Usuario</Text>
            </View>

            <View style={estilos.marco}>
                <View style={estilos.circulo}>
                    <FontAwesomeIcon icon={faUser} size={50} color='#EEFDFF' />

                </View>

                <View style={estilos.fila}>
                    <Text style={estilos.encabezadoFila}>Nombre: </Text>
                    <Text style={estilos.contenidoFila}>{nameP}</Text>
                </View>

                <View style={estilos.fila}>
                    <Text style={estilos.encabezadoFila}>Correo: </Text>
                    <Text style={estilos.contenidoFila}>{emailP}</Text>
                </View>

                <View style={estilos.fila}>
                    <Text style={estilos.encabezadoFila}>Password: </Text>
                    {pOculto && <Text style={estilos.contenidoFila}>{oculto}</Text>}
                    {!pOculto && <Text style={estilos.contenidoFila}>{passwordP}</Text>}
                    <TouchableOpacity onPress={ocultarPw} style={estilos.botonPw} >
                        {pOculto && <FontAwesomeIcon icon={faEye} size={25} color='#5B330C' />}
                        {!pOculto && <FontAwesomeIcon icon={faEyeSlash} size={25} color='#5B330C' />}
                    </TouchableOpacity>
                </View>
                <View style={estilos.fila}>
                    <Text style={estilos.encabezadoFila}>Fecha de registro: </Text>
                    <Text style={estilos.contenidoFila}>{dateP}</Text>
                </View>
            </View>

            <View style={styles.boton}>
                <TouchableOpacity onPress={cerrarSesion}>
                    <Text style={styles.text}>Cerrar Sesion</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 70
    },
    boton: {
        marginTop: 20,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#d1d1d1',
        backgroundColor: '#E29244',
        width: '60%',
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#864607'
    },
    text: {
        fontSize: 30,
        fontWeight: '400'
    },
})

export default Profile