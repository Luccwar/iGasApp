import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        console.warn('Sign In');
        // Validade User
        navigation.navigate('Home');
    }

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPressed = () => {
        console.warn('Sign Up');
        navigation.navigate('SignUp');
    }
    
  
    var imgSource = require('../../../assets/images/iGasLogo.PNG')
    return (
        <ScrollView showsVerticalScrollIndicator={true} >
            <View style={styles.root}>
                <Image source={imgSource} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"></Image>
                <CustomInput placeholder='Email' value={email} setValue={setEmail} />
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry />
                <CustomButton text={'Sign In'} onPress={onSignInPressed} backgroundColor={''} textColor={''} />
                <CustomButton text={'Forgot Password?'} onPress={onForgotPasswordPressed} type={'terciary'} />
                <SocialSignInButtons/>
                <CustomButton text={"Don't Have an account? Create One"} onPress={onSignUpPressed} type={'terciary'} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
});

export default SignInScreen