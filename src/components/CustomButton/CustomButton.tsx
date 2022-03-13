import React from "react"
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({onPress, text, type = 'primary', backgroundColor, textColor}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`], backgroundColor ? {backgroundColor: backgroundColor}: {} ]} >
            <Text style={[styles.text, styles[`text_${type}`], textColor ? {color: textColor}: {} ]}>{text}</Text>
        </Pressable>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },
    container_primary: {
        backgroundColor: '#3366FF',
    },
    container_secondary: {
        borderColor: '#3366FF',
        borderWidth: 2,
    },
    container_terciary: {},
    container_confirm: {
        backgroundColor: '#00A911',
    },
    container_warning: {
        backgroundColor: '#E32525',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    text_secondary: {
        fontWeight: 'bold',
        color: '#3366FF',
    },
    text_terciary: {
        fontWeight: '500',
        color: '#222B45',
    },
})

export default CustomButton