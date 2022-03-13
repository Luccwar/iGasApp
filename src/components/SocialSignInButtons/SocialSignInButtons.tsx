import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons = () =>{
    const onSignInWithFacebookPressed = () => {
        console.warn('Sign In Facebook');
    }

    const onSignInWithGooglePressed = () => {
        console.warn('Sign In Google');
    }

    const onSignInWithApplePressed = () => {
        console.warn('Sign In Apple');
    }

    return(
        <>
            <CustomButton text={'Sign In With Facebook'} onPress={onSignInWithFacebookPressed} backgroundColor={'#E7EAF4'} textColor={'#4765A9'} />
                <CustomButton text={'Sign In With Google'} onPress={onSignInWithGooglePressed} backgroundColor={'#FAE9EA'} textColor={'DD4D44'} />
                <CustomButton text={'Sign In With Apple'} onPress={onSignInWithApplePressed} backgroundColor={'E3E3E3'} textColor={'363636'} />
        </>
    )
}

export default SocialSignInButtons