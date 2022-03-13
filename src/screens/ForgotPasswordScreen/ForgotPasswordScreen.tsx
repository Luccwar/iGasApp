import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const ForgotPasswordScreen = () => {
    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const {control, handleSubmit, formState: {errors},} = useForm();

    const navigation = useNavigation();

    const onSendPressed = () => {
        console.warn('Sign Up');
        navigation.navigate('ResetPassword');
    }

    const onBackToSignInPressed = () => {
        console.warn('Back to Sign In');
        navigation.navigate('SignIn');
    }
    
      return (
        <ScrollView showsVerticalScrollIndicator={true} >
            <View style={styles.root}>
                <Text style={styles.title}> Reset Your Password </Text>
                <CustomInput name={'Email'} placeholder='Enter your Email' control={control} rules={{required: 'Your Email is Required', pattern: {value: EMAIL_REGEX, message: 'Please, insert a valid email'}}} />
                <CustomButton text={'Send'} onPress={handleSubmit(onSendPressed)} type={'primary'} backgroundColor={''} textColor={''} />
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

export default ForgotPasswordScreen