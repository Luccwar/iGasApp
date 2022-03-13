import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ResetPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

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
                <CustomInput placeholder='Enter the code you received' value={code} setValue={setCode} />
                <CustomInput placeholder='Enter New Password' value={password} setValue={setPassword} />
                <CustomInput placeholder='Repeat New Password' value={passwordRepeat} setValue={setPasswordRepeat} />
                <CustomButton text={'Submit'} onPress={onSendPressed} type={'primary'} backgroundColor={''} textColor={''} />
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