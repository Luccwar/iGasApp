import { Button, ButtonProps, Spinner } from "@ui-kitten/components"
import React from "react"
import { View, Text, StyleSheet, Pressable } from 'react-native'

interface CustomButtonProps extends ButtonProps {
    text: string
    block?: boolean
    textColor?: string
    backgroundColor?: string
    type?: string
    customStyle?: any
    loading?: boolean
}

const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
        <Spinner size='small' />
    </View>
);

const CustomButton = ({ customStyle, loading, text, type = 'primary', backgroundColor, textColor, block, ...props }: CustomButtonProps) => {
    return (
        // <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`], backgroundColor ? {backgroundColor: backgroundColor}: {} ]} >
        <View style={[customStyle || {}, { width: block ? '100%' : undefined }]}>
            <Button
                {...props}
                style={{ width: block ? '100%' : undefined }}
                accessoryLeft={loading ? <LoadingIndicator /> : null}
                disabled={loading}
            >
                {text}
            </Button>
        </View>
        // <Text style={[styles.text, styles[`text_${type}`], textColor ? {color: textColor}: {} ]}>{text}</Text>
        // </Pressable>

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
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default CustomButton