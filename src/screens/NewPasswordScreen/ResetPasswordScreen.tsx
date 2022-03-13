import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const ResetPasswordScreen = () => {
    const {control, handleSubmit, formState: {errors}, watch} = useForm();

    const pwd=watch('Password')

    const navigation = useNavigation();

    const onSendPressed = () => {
        console.warn('Send');
        navigation.navigate('SignIn');
    }

    const onBackToSignInPressed = () => {
        console.warn('Back to Sign In');
        navigation.navigate('SignIn');
    }
    
      return (
        <ScrollView showsVerticalScrollIndicator={true} >
            <View style={styles.root}>
                <Text style={styles.title}> Reset Your Password </Text>
                <CustomInput name={'Code'} placeholder='Enter the code you received' control={control} rules={{required: 'Code is Required'}} />
                <CustomInput name={'Password'} placeholder='Password' control={control} secureTextEntry rules={{required: 'Your new Password is Required', minLength: {value: 3, message: 'Password should contain at least three characters'}}} />
                <CustomInput name={'PasswordRepeat'} placeholder='Repeat Password' control={control} secureTextEntry rules={{required: 'Repeating your new Password is Required', minLength: {value: 3, message: 'Password should contain at least three characters'}, validate: value => value == pwd ? true : 'Password does not match'}} />
                <CustomButton text={'Submit'} onPress={handleSubmit(onSendPressed)} type={'primary'} backgroundColor={''} textColor={''} />
                <CustomButton text={"Back to Sign In"} onPress={onBackToSignInPressed} type={'terciary'} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222B45',
        margin: 10,
    },
    text:
    {
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#3366FF',
    },
});

export default ResetPasswordScreen