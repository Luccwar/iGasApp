import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignUpButtons from '../../components/SocialSignUpButtons/SocialSignUpButtons'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [cpf, setCpf] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        console.warn('Sign Up');
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
                <CustomInput placeholder='Full Name' value={fullName} setValue={setFullName} />
                <CustomInput placeholder='Email' value={email} setValue={setEmail} />
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry />
                <CustomInput placeholder='Repeat Password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry />
                <CustomInput placeholder='CPF' value={cpf} setValue={setCpf} />

                <CustomButton text={'Register'} onPress={onRegisterPressed} backgroundColor={''} textColor={''} />
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