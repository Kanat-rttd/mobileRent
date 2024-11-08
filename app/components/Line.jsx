import React from 'react';
import { View, StyleSheet } from 'react-native';

const Line = () => (
  <View style={styles.container}>
    <View style={styles.line} 
 />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: '100%',
    top: 0,
    left: 0,
    height: 0.5,
    backgroundColor: 'grey',
    marginVertical: 15
  },
});

export default Line;