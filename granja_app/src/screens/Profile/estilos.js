import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        margin: 5,
        alignItems: 'center',
        
    },
    marco:{
        marginVertical: 10,
        padding: 10,
        borderWidth: 5,
        height: '75%',
        width: '80%',
        borderColor: '#864607',
        borderRadius: 15,
        backgroundColor: '#EEFDFF',
        alignItems: 'center'
        
    },
    circulo:{
        padding: 10,
        borderWidth: 5,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: '#EEFDFF',
        backgroundColor: '#864607',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
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
        paddingLeft: 10,
    },
    fila:{
        flexDirection: 'row',
        padding: 5,
        margin: 10
    },
    encabezadoFila:{
        fontSize: 20,
        fontWeight: '600',
    },
    contenidoFila:{
        fontSize: 20,
        color: '#5B330C',
        textDecorationLine: 'underline',
        textDecorationColor: '#5B330C',
    },
    botonPw:{
        marginHorizontal: 10
    },
});