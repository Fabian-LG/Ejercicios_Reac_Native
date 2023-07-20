import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import estilos from "./estilos";

const Seleccion = (props)=> {
    
    return (
        <View style={estilos.pickerHeight}>
            <View style={estilos.pickerContainer}>
                <Text style={estilos.pickerLabel}>{props.label}</Text>
                <Picker style={estilos.picker} {...props}>
                    {props.items.map((i) => (
                        <Picker.Item key={i.label} {...i} />
                    ))}
                </Picker>
            </View>
        </View>
    );
}

export default Seleccion