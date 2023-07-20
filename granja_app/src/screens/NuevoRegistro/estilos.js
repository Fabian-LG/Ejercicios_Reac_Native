import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 5,
        margin: 5,
    },
    pickersBlock: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    pickerHeight: {
        height: 250,
    },
    pickerContainer: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: 5,
        height: 230,
        borderWidth: 1,
        borderColor: '#864607',
        backgroundColor: '#EEFDFF',
        borderRadius:5
    },
    pickerLabel: {
        fontSize: 14,
        fontWeight: "bold",
    },
    picker: {
        width: 110,
        height: 200,
        backgroundColor: '#EEFDFF',
    },
    selection: {
        flex: 1,
        textAlign: "center",
    },
    txtSeleccion:{
        
        fontSize: 20,
        color: '#864607'
    },
    fila: {
        flexDirection: 'row',
        marginVertical: 8,
        alignSelf: 'center',
    },
    txtFila: {
        width: 200,
        padding: 5,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    inpFila: {
        width: 80,
        padding: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#864607',
        backgroundColor: '#EEFDFF',
    },
    textosFila:{
        fontSize: 18,
        fontWeight: '500'
    },
    ingresarTxt:{
        fontSize: 15,
        fontWeight: '500',
        
    },

    parteBaja: {
        marginVertical: 15,

        paddingHorizontal: 30

    },
    scroll: {
        marginTop: 15,
    },
    buttons: {
        alignItems: 'center'
    },
    button: {
        width: 250,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#E29244',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderWidth: 3,
        borderColor: '#864607',
        color: '#864607',
    },
    text: {
        fontSize: 20,
        fontWeight: '400',
        color: '#864607',
        fontWeight: '400'
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

    predictTxt:{
        fontSize: 25,
    },
    prediction:{
        color: '#864607'
    },
});