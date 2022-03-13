import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/core'
import { useForm } from 'react-hook-form'

const SignUpScreen = () => {
    const {control, handleSubmit, formState: {errors},} = useForm();

    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('ConfirmEmail');
    }

    const onResendCodePressed = () => {
        console.warn('Resend Code');
    }

    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn');
    }
    
      return (
        <ScrollView showsVerticalScrollIndicator={true} >
            <View style={styles.root}>
                <Text style={styles.title}> Create an Account </Text>
                <CustomInput name={'Code'} placeholder='Enter your Confirmation Code' control={control} rules={{required: 'Code is Required'}} />
                <CustomButton text={'Confirm'} onPress={handleSubmit(onConfirmPressed)} type={'primary'} backgroundColor={''} textColor={''} />
                <CustomButton text={"Resend Code"} onPress={onResendCodePressed} type={'secondary'} />
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

export default SignUpScreen