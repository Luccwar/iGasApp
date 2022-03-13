import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignUpButtons from '../../components/SocialSignUpButtons/SocialSignUpButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

const SignUpScreen = () => {

    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors}, watch} = useForm( /*{ defaultValues: { email: 'Default Email' }, }*/ );
    const pwd=watch('Password')

    const onRegisterPressed = (data) => {
        console.warn(data);
        navigation.navigate('ConfirmEmail');
    }

    const onLoginPressed = () => {
        console.warn('Login');
        navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn('Terms Pressed');
    }

    const onPrivacyPolicyPressed = () => {
        console.warn('Privacy Pressed');
    }
    
      return (
        <ScrollView showsVerticalScrollIndicator={true} >
            <View style={styles.root}>
                <Text style={styles.title}> Create an Account </Text>
                <CustomInput name={'FullName'} placeholder='Full Name' control={control} rules={{required: 'Your Full Name is Required'}} />
                <CustomInput name={'Email'} placeholder='Email' control={control} rules={{required: 'Your Email is Required', pattern: {value: EMAIL_REGEX, message: 'Your email is invalid.'}}} />
                <CustomInput name={'Password'} placeholder='Password' control={control} secureTextEntry rules={{required: 'Your Password is Required', minLength: {value: 3, message: 'Password should contain at least three characters'}}} />
                <CustomInput name={'PasswordRepeat'} placeholder='Repeat Password' control={control} secureTextEntry rules={{required: 'Repeating your Password is Required', minLength: {value: 3, message: 'Password should contain at least three characters'}, validate: value => value == pwd ? true : 'Password does not match'}} />
                <CustomInput name={'CPF'} placeholder='CPF' control={control} rules={{required: 'Your CPF is Required'}} />

                <CustomButton text={'Register'} onPress={handleSubmit(onRegisterPressed)} backgroundColor={''} textColor={''} />
                <Text style={styles.text}>By registering, you confirm that you accept our <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>.</Text>
                <SocialSignUpButtons/>
                <CustomButton text={"Already Have an account? Login here."} onPress={onLoginPressed} type={'terciary'} />
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