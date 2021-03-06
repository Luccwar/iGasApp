import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Alert } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignUpButtons from '../../components/SocialSignUpButtons/SocialSignUpButtons'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Text } from '@ui-kitten/components'
import AuthService from '../../services/AuthService'

const SignUpScreen = () => {

    const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const navigation = useNavigation();

    const { control, handleSubmit, formState: { errors }, watch, setError } = useForm( /*{ defaultValues: { email: 'Default Email' }, }*/);
    const pwd = watch('password')

    const [isSubmitting, setIsSubmitting] = useState(false)


    const onRegisterPressed = (data) => {
        setIsSubmitting(true)
        // console.warn(data);
        AuthService.register(
            data.name,
            data.email,
            data.password,
            data.cpf,
        ).then(result => {
            if (result.code != 200) {
                Alert.alert('Ops!', 'There are some errors in the form')
                result.errors.forEach(error => {
                    const fieldName = error.property === 'document' ? 'cpf' : error.property
                    setError(fieldName, { message: Object.values(error.constraints)[0] as string })
                })
            } else {
                navigation.navigate('ConfirmEmail');
            }
            setIsSubmitting(false)
        })
    }

    const onLoginPressed = () => {
        // console.warn('Login');
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
                <CustomInput
                    customStyle={styles.input}
                    name={'name'}
                    placeholder='Full Name'
                    control={control}
                    rules={{ required: 'Your Full Name is Required' }}
                />
                <CustomInput
                    customStyle={styles.input}
                    name={'email'}
                    placeholder='Email'
                    control={control}
                    rules={{ required: 'Your Email is Required', pattern: { value: EMAIL_REGEX, message: 'Your email is invalid.' } }}
                    keyboardType={"email-address"}
                />
                <CustomInput
                    customStyle={styles.input}
                    name={'password'}
                    placeholder='Password'
                    control={control}
                    secureTextEntry
                    rules={{ required: 'Your Password is Required', minLength: { value: 3, message: 'Password should contain at least three characters' } }}
                />
                <CustomInput
                    customStyle={styles.input}
                    name={'repeat_password'}
                    placeholder='Repeat Password'
                    control={control}
                    secureTextEntry
                    rules={{ required: 'Repeating your Password is Required', minLength: { value: 3, message: 'Password should contain at least three characters' }, validate: value => value == pwd ? true : 'Password does not match' }}
                />
                <CustomInput
                    customStyle={styles.input}
                    name={'cpf'}
                    placeholder='CPF'
                    control={control}
                    rules={{ required: 'Your CPF is Required' }}
                />

                <CustomButton
                    customStyle={styles.input}
                    text={'Register'}
                    onPress={handleSubmit(onRegisterPressed)}
                    loading={isSubmitting}
                    block
                />
                {/* <Text style={styles.text}>
                    By registering, you confirm that you accept our 
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> 
                    <Text>and</Text> 
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
                .</Text> */}
                {/* <SocialSignUpButtons/> */}
                <CustomButton
                    customStyle={styles.input}
                    text={"Already Have an account? Login here."}
                    onPress={onLoginPressed}
                    status="info"
                    appearance="ghost"
                    block
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
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
    link: {
        color: '#3366FF',
    },
    input: {
        marginBottom: 5,
        marginTop: 5,
    }
});

export default SignUpScreen