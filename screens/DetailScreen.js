import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailScreen extends React.Component{
    static navigationOptions={
        headerTitle: 'this should be a dynamic title',
        headerStyle:{
            backgroundColor:'teal',
        },
        headerTintColor: 'white',
    }

    render(){
      return (
      <View style={styles.container}>
        <Text style={styles.fontSize}>This is DetailScreen </Text>
      </View>
    );}

  }//end class

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  font:{
    fontSize:30,
  },
});

