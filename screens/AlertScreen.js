import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ImageBackground} from 'react-native';

export default function LockScreen({ navigation }) {
  const iconURI = {
    
  };

  const onContinue = () => {
    if (password) {
      navigation.navigate('Home');
    }
  }

  return (
    <View style={styles.container} onPress={onContinue}>
      <ImageBackground source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/OOjs_UI_icon_alert-yellow.svg/1024px-OOjs_UI_icon_alert-yellow.svg.png'}} style={styles.image}>
      </ImageBackground>

      <Text style={styles.title}>Warning</Text>
      <Text style={styles.text}>Somebody is trying to enter in your house</Text>
      <Text style={styles.denied}>ACCESS WAS DENIED</Text>
      <Button title="Show LIVE photos" style={styles.button} onPress={onContinue}/>

    </View>
      );
  }

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 'auto',
      textAlign: 'center'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      width: '80%',

  },
  title: {
    fontFamily: 'montserrat-regular', 
    fontWeight: 'bold', 
    fontSize: 20
},
text: {
    fontFamily: 'montserrat-regular', 
    fontSize: 15,
},
layout: {
    padding: 20
},
// button: {
//   marginTop: 30,
// },
approved: {
    fontFamily: 'montserrat-regular', 
    fontSize: 15,
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
    borderRadius: 5,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#adfa6e'

},
denied: {
  fontSize: 15,
  marginBottom: 30,
  borderRadius: 5,
  alignItems: 'center',
  textAlign: 'center',
  fontFamily: 'montserrat-regular', 
  padding: 20,
  marginTop: 20,
    backgroundColor: '#ff4433'
},
column: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',

},
image: {
    resizeMode: 'contain',
    justifyContent: 'center',
    width: 100,
    marginBottom: 40,
    marginRight:20,
    height: 100
  },
  });