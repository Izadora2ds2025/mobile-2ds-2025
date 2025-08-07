import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome:"izadora"
    };
  }

  componentDidMount() {
    // code to run after component mounts
  }

  componentWillUnmount() {
    // cleanup code
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>My Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;