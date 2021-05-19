import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, ImageBackground,Button } from 'react-native';

export default function Home({ navigation }) {
    //on/off recognition button
    // Allowed Faces Page 
    const uri1 = {
        name: 'Jane Mitchell',
        date: '23 March 2021, 10:53',
        uri: 'https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg',
    }
    const uri2 = {
        name: 'Megan Fox',
        date: '23 March 2021, 10:53',
        uri: 'https://dictionary.cambridge.org/ru/images/thumb/face_noun_002_13169.jpg?version=5.0.161',
    }
    const uri3 = {
        name: 'Johnattan Browse',
        date: '23 March 2021, 10:53',
        uri: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    }
    const uri4 = {
        name: 'William Smith',
        date: '23 March 2021, 10:53',
        uri: 'https://pngimg.com/uploads/face/face_PNG5645.png',
    }
    
  const onContinue = () => {
      navigation.navigate('AlertScreen');
  }
      return (
      <View  style={styles.layout}>
        <View style={styles.column}>
            <View style={styles.container}>
                <ImageBackground source={{uri: uri1.uri}} style={styles.image}>
                </ImageBackground>
                <View style={styles.column}>
                    <Text style={styles.title}  onPress={onContinue}>{uri1.name}</Text>
                    <Text style={styles.text}>{uri1.date}</Text>
                    <Text style={styles.approved}>Approved</Text>
                </View>
            </View>
            <View style={styles.container}>
                <ImageBackground source={{uri: uri2.uri}} style={styles.image}>
                </ImageBackground>
                <View style={styles.column}>
                    <Text style={styles.title}>{uri2.name}</Text>
                    <Text style={styles.text}>{uri2.date}</Text>
                    <Text style={styles.approved}>Approved</Text>

                </View>
            </View>
            <View style={styles.container}>
                <ImageBackground source={{uri: uri3.uri}} style={styles.image}>
                </ImageBackground>
                <View style={styles.column}>
                    <Text style={styles.title}>{uri3.name}</Text>
                    <Text style={styles.text}>{uri3.date}</Text>
                    <Text style={styles.approved}>Approved</Text>

                </View>
            </View>
            <View style={styles.container}>
                <ImageBackground source={{uri: uri4.uri}} style={styles.image}>
                </ImageBackground>
                <View style={styles.column}>
                    <Text style={styles.title}>{uri4.name}</Text>
                    <Text style={styles.text}>{uri4.date}</Text>
                    <Text style={styles.denied}>Denied</Text>

                </View>
            </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
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
    approved: {
        fontFamily: 'montserrat-regular', 
        fontSize: 15,
        padding: 5,
        marginTop: 15,
        borderRadius: 5,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#adfa6e'

    },
    denied: {
        fontFamily: 'montserrat-regular', 
        marginTop: 15,
        fontSize: 15,
        borderRadius: 5,
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
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
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
        // justifyContent: 'center',
        // alignItems: 'center',
        // margin: 'auto',
        // textAlign: 'center'
      },
});