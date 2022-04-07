import React, { useState, useEffect } from 'react';
import { Pressable, Image, StyleSheet, Text } from 'react-native';
import * as IP from 'expo-image-picker';
import { Controller } from 'react-hook-form'


const ImagePicker = ({text, type = 'primary', backgroundColor, textColor, control, name, rules}) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await IP.launchImageLibraryAsync({
      mediaTypes: IP.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      <Pressable onPress={pickImage} style={[styles.container, styles[`container_${type}`], backgroundColor ? {backgroundColor: backgroundColor}: {} ]} >
        <Text style={[styles.text, styles[`text_${type}`], textColor ? {color: textColor}: {} ]}>{text}</Text>
      </Pressable>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',

      padding: 15,
      marginVertical: 5,

      alignItems: 'center',
      borderRadius: 5,
  },
  container_primary: {
      backgroundColor: '#3366FF',
  },
  container_secondary: {
      borderColor: '#3366FF',
      borderWidth: 2,
  },
  container_terciary: {},
  container_confirm: {
      backgroundColor: '#00A911',
  },
  container_warning: {
      backgroundColor: '#E32525',
  },
  text: {
      fontWeight: 'bold',
      color: 'white',
  },
  text_secondary: {
      fontWeight: 'bold',
      color: '#3366FF',
  },
  text_terciary: {
      fontWeight: '500',
      color: '#222B45',
  },
})

export default ImagePicker