import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ImageBackground} from 'react-native';

export default function LockScreen({ navigation }) {
  const [password, setPasswordValue] = useState('');

  const onContinue = () => {
    if (password) {
      navigation.navigate('Home');
    }
  }

  return (
      <View style={styles.container}>
         <ImageBackground source={{uri: 'https://lh3.googleusercontent.com/proxy/ntvFRzS3TRJflgxv6xhpP5OYBDye66tyBe7Lw6HZG-U8cCGhOW27wE0KzVc5xLwKS08RUO-ay9t8VGA-fVQz6rKj3PHQBMLybCLSLdgpUGWww7XG-Q'}} style={styles.image}>
          </ImageBackground>
          <Text style={styles.text}>Hi! Enter pin!</Text>
          <TextInput 
            onChangeText={password => setPasswordValue(password)}
            style={styles.input}
            secureTextEntry={true}
            placeholder="ex. 1111"
          />
          <View >
          <Button title="Continue" style={styles.button} onPress={onContinue}/>
          </View>
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
    button: {
      height: 30,
      width: '50%',
      padding: 15,
    },
    text: {
        fontFamily: 'montserrat-regular'
    },
    input: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 10,
      marginBottom: 40,
      width: '50%',
      borderColor: '#e1e1e1'
    },
    image: {
      resizeMode: 'contain',
      justifyContent: 'center',
      width: 100,
      marginBottom: 40,
      height: 100
    },
    layout: {
      backgroundColor: '#fff',
      fontFamily: 'montserrat-regular',
    },
  });