import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        console.warn('Sign Up');
        navigation.navigate('NewPassword');
    }

    const onBackToSignInPressed = () => {
        console.warn('Back to Sign In');
        navigation.navigate('SignIn');
    }
    
      return (
        <ScrollView showsVerticalScrollIndicator={true} >
            <View style={styles.root}>
                <Text style={styles.title}> Reset Your Password </Text>
                <CustomInput placeholder='Enter your Email' value={email} setValue={setEmail} />
                <CustomButton text={'Send'} onPress={onSendPressed} type={'primary'} backgroundColor={''} textColor={''} />
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