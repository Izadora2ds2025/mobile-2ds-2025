import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Aula05 from './aula05';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

export default Aula06;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

