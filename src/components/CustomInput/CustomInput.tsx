import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input as TextInput } from '@ui-kitten/components'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, placeholder, width, height, textAlignVertical, keyboardType, multiline, prefix, secureTextEntry, rules = {}, customStyle = {} }) => {

    return (
        <Controller control={control} name={name} rules={rules} render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <View style={customStyle}>
                {prefix && <Text style={styles.prefix}>{prefix}</Text>}
                <TextInput value={value} onChangeText={onChange} onBlur={onBlur} placeholder={placeholder} style={[styles.input, width ? { width: width } : {}, height ? { height: height } : {}, textAlignVertical ? { textAlignVertical: textAlignVertical } : {}, error ? { borderColor: 'red' } : {}]} secureTextEntry={secureTextEntry} keyboardType={keyboardType} multiline={multiline} />
                {error && (
                    <Text style={{ color: 'red', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>
                )}
            </View>
        )}
        />
    )

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