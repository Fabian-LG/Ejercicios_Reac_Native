/*
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const NuevoRegistro = () => {

  const [oxigenacion, setOxigenacion] = useState();
  const [temperatura, setTemperatura] = useState();
  const [salinidad, setSalinidad] = useState();
  const [pH, setPh] = useState();
  const [biomasa, setBiomasa] = useState();
  const [prueba, setPrueba] = useState()


  const onPr = () =>{
    setPrueba('O2: ' + oxigenacion + ', °C: ' + temperatura + ', sal: ' + salinidad + ', ph: ' + pH +', biomasa: '+ biomasa);
    setOxigenacion('');
    setTemperatura('');
    setSalinidad('');

  }
  return (
    <View style={styles.container}>
      <Text>NuevoRegistro</Text>
      <View style={styles.body}>
      
      <View style={styles.fila}>
        <Text>Oxigenacion</Text>
        <TextInput
          style={styles.ingresarTxt}
          placeholder="Oxigenacion"
          onChangeText={setOxigenacion}
          value={oxigenacion}
        />
      </View>

      <View style={styles.fila}>
        <Text>Temperatura</Text>
        <TextInput
          style={styles.ingresarTxt}
          placeholder="Temperatura"
          onChangeText={setTemperatura}
          value={temperatura}
        />
      </View>

      <View style={styles.fila}>
        <Text>Salinidad</Text>
        <TextInput
          style={styles.ingresarTxt}
          placeholder="Salinidad"
          onChangeText={setSalinidad}
          value={salinidad}
        />
      </View>

      <View style={styles.fila}>
        <Text>pH</Text>
        <TextInput
          style={styles.ingresarTxt}
          placeholder="pH"
          onChangeText={setPh}
        />
      </View>

      <View style={styles.fila}>
        <Text>Biomasa</Text>
        <TextInput
          style={styles.ingresarTxt}
          placeholder="Biomasa"
          onChangeText={setBiomasa}
        />
      </View>

      <Button
      title='Prueba'
      onPress={onPr}
      />

      <Text style={{fontSize: 35, fontStyle: 'italic', fontWeight:'bold'}}>{prueba}</Text>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body:{
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  fila: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    margin: 5
  },
  ingresarTxt: {
    borderWidth: 1,
    marginHorizontal: 15,
    padding: 5,
    width: '35%',
    height: 40
  },
})
export default NuevoRegistro

*/


/*

import React, {useState} from "react";
import { StyleSheet, Text, Modal, TouchableOpacity, SafeAreaView, Touchable } from "react-native";
import { ModalPicker } from "./ModalPicker";

const NuevoRegistro = () =>{

  const [chooseData, setChooseData] = useState('Select Item...')
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalVisibility = (bool) =>{
    setIsModalVisible(bool)
  }

  const setData = (option) => {
    setChooseData(option)
  }

  return(
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
      onPress={()=> changeModalVisibility(true)}
      style={styles.touchableOpacity}>

        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>

      <Modal 
      transparent={true}
      animationType='fade'
      visible={isModalVisible}
      nRequestClose={()=> changeModalVisibility(false)}>
        
        <ModalPicker 
        changeModalVisibility={changeModalVisibility(false)} 
        />
      </Modal>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: ' center',
    padding: 20
  },
  text:{
    marginVertical: 20,
    fontSize: 25,
  },
  touchableOpacity:{
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
});

export default NuevoRegistro
*/
import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, ScrollView, Button, TouchableOpacity, Alert, } from "react-native";
import estilos from "./estilos";
import ModalPicker from "./ModalPicker";

import { auth } from '../../config/fb'
import { database } from "../../config/fb";
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";





const semana = [
  { label: "1", value: "01" },
  { label: "2", value: "02" },
  { label: "3", value: "03" },
  { label: "4", value: "04" },
  { label: "5", value: "05" },
  { label: "6", value: "06" },
  { label: "7", value: "07" },
  { label: "8", value: "08" },
  { label: "9", value: "09" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
  { label: "19", value: "19" },
  { label: "20", value: "20" },
];

const semanaDias = {1: "16-22_enero", 2: "23-29_enero", 3: "14-20_agosto", 4: "6-12_febrero", 5:"13-19_febrero",
6: "20-26_febrero", 7: "27_febrero_5_marzo", 8:"6-12_marzo", 9:"13-19_marzo", 10:"20-26_marzo",
11: "4-10_septiembre", 12: "11-17_septiembre", 13: "18-24_septiembre", 14: "24_septiembre_1_octubre",
15: "2-8_octubre"}

const seccion = [
  { label: "AB", value: 'AB' },
  { label: "C", value: 'C' },
  { label: "D", value: 'D' },
  { label: "E", value: 'E' },
  { label: "F", value: 'F' },
  { label: "G", value: 'G' },
  { label: "H", value: 'H' },
  { label: "I", value: 'I' },
  { label: "J", value: 'J' },
  { label: "K", value: 'K' },
];

const estanque = [
  { label: "1", value: "01" },
  { label: "2", value: "02" },
  { label: "3", value: "03" },
  { label: "4", value: "04" },
  { label: "5", value: "05" },
  { label: "6", value: "06" },
  { label: "7", value: "07" },
  { label: "8", value: "08" },
  { label: "9", value: "09" },
  { label: "10", value: "10" },
  { label: "11", value: "11" },
  { label: "12", value: "12" },
  { label: "13", value: "13" },
  { label: "14", value: "14" },
  { label: "15", value: "15" },
  { label: "16", value: "16" },
  { label: "17", value: "17" },
  { label: "18", value: "18" },
  { label: "19", value: "19" },
  { label: "20", value: "20" },
];



const NuevoRegistro = () => {

  
  const [semanaStr, setSemanaStr] = useState('');
  const [seccionStr, setSeccionStr] = useState('');
  const [estanqueStr, setEstanqueStr] = useState('');

  const [oxigenoAm, setOxigenoAm] = useState('');
  const [oxigenoPm, setOxigenoPm] = useState('');
  const [tcAm, setTcAm] = useState('');
  const [tcPm, setTcPm] = useState('');
  const [salinidadR, setSalinidadR] = useState('');
  const [pHR, setPh] = useState('');
  const [biomasaR, setBiomasa] = useState('');
  const [aSemanalR, setAsemanal] = useState('');
  const [aAcumuladoR, setAacumulado] = useState('');

  var diaDeSemana = semanaDias[parseInt(semanaStr)]
  var weekStr = 'semana_'+semanaStr+'_'+diaDeSemana;
  var sectionStr = seccionStr;
  var tankStr = estanqueStr.toString();

  
  console.log(diaDeSemana)
  

  const objPrueba = { id: '2', azul: 'blue', rojo: 'red', amarillo: 'yellow' }
  const obj = {o2am: oxigenoAm, o2pm: oxigenoPm, tcAm: tcAm, tcPm: tcPm,
  salinidad: salinidadR, pH: pHR, biomasa: biomasaR,
  alimentoSemanal: aSemanalR, alimentoAcumulado: aAcumuladoR }


  const nuevoRegistro = async () => {
    try {
      await setDoc(doc(database, '2022', weekStr, sectionStr, tankStr), obj);
      console.log('Cargando...')
      Alert.alert('Registro completado con éxito')

    } catch (e) {
      console.log('Ahora salió: ' + e)
      Alert.alert('No se pudo realizar el registro con éxito')
    }
    console.log('Esta es una prueba')
    console.log('El usuario')
    console.log(obj)
  }


  const prediccionTxt = "Prediccion: "
  const [prediccionBool, setPrediccionBool] = useState(false);
  const [nPrediccion, setNprediccion] = useState();

  var numPrediccion;

  const isPredicted = ()=>{
    numPrediccion = Math.floor(Math.random() * 1000 + 1)
    console.log('numPrediccion='+numPrediccion)

    setPrediccionBool(true)

     //setAsemanal(prediccion);
    setAsemanal(numPrediccion);
    setNprediccion(numPrediccion)
    console.log(prediccionBool)
    console.log('nPrediccion =' + nPrediccion)
    console.log('aSemanal='+aSemanalR)
  }
  

  return (

    <SafeAreaView style={estilos.container}>

      <View style={estilos.titContenedor}>

        <FontAwesomeIcon icon={faFileCirclePlus} size={20} color='#e47911' />

        <Text style={estilos.titulo}>Nuevo Registro</Text>
      </View>

      <ScrollView style={estilos.scroll}>
        <View style={estilos.pickersBlock}>



          <ModalPicker
            label="Semana"
            items={semana}
            selectedValue={semanaStr}
            onValueChange={(week) => {
              setSemanaStr(week);
            }}
          />


          <ModalPicker
            label="Seccion"
            items={seccion}
            selectedValue={seccionStr}
            onValueChange={(section) => {
              setSeccionStr(section);
              {/*
            setSelection(
              `${selectedSize} ${vestimenta.find((i) => i.value === garment).label
              }`
            );
          */}

            }}
          />

          <ModalPicker
            label="Estanque"
            items={estanque}
            selectedValue={estanqueStr}
            onValueChange={(pond) => {
              setEstanqueStr(pond);
            }}
          />
        </View>

        <Text style={estilos.textosFila}>Semana: <Text style={estilos.txtSeleccion}>{semanaStr}</Text>, Seccion: <Text style={estilos.txtSeleccion}>{seccionStr}</Text>, Estanque: <Text style={estilos.txtSeleccion}>{estanqueStr}</Text></Text>

        <View style={estilos.parteBaja}>

          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>Oxigenacion am:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setOxigenoAm}
              />
            </View>
          </View>

          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>Oxigenacion pm:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setOxigenoPm}
              />
            </View>
          </View>



          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>Temperatura am:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setTcAm}
              />
            </View>
            {/*value={temperatura}*/}
          </View>


          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>Temperatura pm:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setTcPm}
              />
            </View>
            {/*value={temperatura}*/}
          </View>


          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>Salinidad:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setSalinidadR}
              />
            </View>
          </View>

          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>pH:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setPh}
              />
            </View>
          </View>

          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>Biomasa:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setBiomasa}
              />
            </View>
          </View>

          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>Alimento Semanal:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setAsemanal}
              />
            </View>
          </View>

          <View style={estilos.fila}>
            <View style={estilos.txtFila}>
              <Text style={estilos.textosFila}>Alimento Acumulado:</Text>
            </View>
            <View style={estilos.inpFila}>
              <TextInput
                style={estilos.ingresarTxt}
                placeholder="Ingresar"
                keyboardType="numeric"
                onChangeText={setAacumulado}
              />
            </View>
          </View>


        </View>
        <View style={estilos.buttons}>
          <TouchableOpacity style={estilos.button} onPress={nuevoRegistro}>
            <Text style={estilos.text}>Realizar registro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[estilos.button, {marginBottom: 20}]} onPress={isPredicted}>
            <Text style={estilos.text}>Realizar prediccion</Text>
          </TouchableOpacity>

          {prediccionBool && <Text style={estilos.predictTxt}>{prediccionTxt}<Text style={estilos.prediction}>{nPrediccion}</Text></Text>}
        </View>

        

      </ScrollView>
    </SafeAreaView >
  );
}

export default NuevoRegistro;