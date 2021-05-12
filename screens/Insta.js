import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Insta extends React.Component{
    render() {
      return (
        <View style={styles.container}>
        <Text style={styles.text}>Instagram</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container:{
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 200
    },
    text: {
      textAlign: 'center',
      color: 'purple',
      fontSize: 20,
      fontWeight: 'bold'
    }
  
  });