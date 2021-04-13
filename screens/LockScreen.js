import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, Button, View, ImageBackground} from 'react-native';

export default function LockScreen({ navigation }) {
  // check if user is logged, otherwise show this lock screen
    return (
      <View style={styles.container}>
         <ImageBackground source={() =>  {uri: '../assets/images/pin-icon.png'}} style={styles.image}>
            <Text style={styles.bookText}>{item.text}</Text>
          </ImageBackground>
          <Text style={styles.text}>Hi! Enter pin!</Text>
          <TextInput 
              style={styles.input}
              placeholder="Enter your name"
              onChangeText={onInputChange}
          />
          <View style={styles.button}>
              <Button title="Continue" onPress={onContinue}/>
          </View>
      </View>
      );
  }

  const styles = StyleSheet.create({
    text: {
        fontFamily: 'montserrat-regular'
    },
    image: {
      resizeMode: 'contain',
      justifyContent: 'center',
      width: 100,
    },
    layout: {
      backgroundColor: '#fff',
      fontFamily: 'montserrat-regular',
    },
  });