import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({control, name, placeholder, width, height, textAlignVertical, keyboardType, multiline, prefix, secureTextEntry, rules={}}) => {
    if(!prefix) {
    return (
            <Controller control={control} name={name} rules={rules} render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( 
                <>
                <View style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8'}]}>
                <TextInput value={value} onChangeText={onChange} onBlur={onBlur} placeholder={placeholder} style={[styles.input, width ? {width: width}: {}, height ? {height: height}: {}, textAlignVertical ? {textAlignVertical: textAlignVertical}: {} ]} secureTextEntry={secureTextEntry} keyboardType={keyboardType} multiline={multiline} />
                </View>
                {error && (
                    <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                )}
                </>
            )}
        />     
    )
    }
    else{
        return (
            <Controller control={control} name={name} rules={rules} render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( 
                <>
                <View style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8'}]}>
                <Text style={styles.prefix }>{prefix}</Text>
                <TextInput value={value} onChangeText={onChange} onBlur={onBlur} placeholder={placeholder} style={[styles.input, width ? {width: width}: {}, height ? {height: height}: {}, textAlignVertical ? {textAlignVertical: textAlignVertical}: {} ]} secureTextEntry={secureTextEntry} keyboardType={keyboardType} multiline={multiline} />
                </View>
                {error && (
                    <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
                )}
                </>
            )}
        />     
    )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        width: '100%',
    },
    prefix: {
        paddingHorizontal: 5,
        fontWeight: 'bold',
        color: 'black'
      },
});

export default CustomInput