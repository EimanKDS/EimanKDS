import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

const ExtraScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontSize}>This is ExtraScreen </Text>
    </View>
  );
}

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

export default ExtraScreen;


