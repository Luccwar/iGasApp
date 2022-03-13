import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () =>{
    const onSignUpWithFacebookPressed = () => {
        console.warn('Sign Up Facebook');
    }
    
    const onSignUpWithGooglePressed = () => {
        console.warn('Sign Up Google');
    }
    
    const onSignUpWithApplePressed = () => {
        console.warn('Sign Up Apple');
    }
    
    return(
        <>
            <CustomButton text={'Sign Up With Facebook'} onPress={onSignUpWithFacebookPressed} backgroundColor={'#E7EAF4'} textColor={'#4765A9'} />
            <CustomButton text={'Sign Up With Google'} onPress={onSignUpWithGooglePressed} backgroundColor={'#FAE9EA'} textColor={'DD4D44'} />
            <CustomButton text={'Sign Up With Apple'} onPress={onSignUpWithApplePressed} backgroundColor={'E3E3E3'} textColor={'363636'} />
        </>
    )
}

export default SocialSignInButtons