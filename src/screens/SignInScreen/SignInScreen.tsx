import React, { useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

import { Logo } from '../../components/Logo'

const SignInScreen = () => {

    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors }, } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);
        // Validade User
        navigation.navigate('Main');
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        console.warn('Sign Up');
        navigation.navigate('SignUp');
    }


    // var imgSource = require('../../../assets/images/iGasLogo.PNG')
    return (
        <ScrollView showsVerticalScrollIndicator={true} >
            <View style={styles.root}>
                <Logo />
                <CustomInput name={'Email'} placeholder='Email' control={control} rules={{ required: 'Your Email is Required', pattern: { value: EMAIL_REGEX, message: 'Please, insert a valid email' } }} keyboardType={"email-address"} />
                <CustomInput name={'Password'} placeholder='Password' control={control} secureTextEntry rules={{ required: 'Password is Required', minLength: { value: 3, message: 'Password should contain at least three characters' } }} />

                <CustomButton text={'Sign In'} onPress={handleSubmit(onSignInPressed)} backgroundColor={''} textColor={''} />
                <CustomButton text={'Forgot Password?'} onPress={onForgotPasswordPressed} type={'terciary'} />
                <SocialSignInButtons />
                <CustomButton text={"Don't Have an account? Create One"} onPress={onSignUpPressed} type={'terciary'} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
});

export default SignInScreen