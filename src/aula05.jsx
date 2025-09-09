import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula05  extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={ styles.caixa1 }>1</View>
        <View style={ styles.caixa2 }>
          <Image 
          style={styles.img1 }
          source={{ uri: 'https://www.estadao.com.br/resizer/v2/KJDE6VL4F5AVJJJBLH5XYGVWD4.png?quality=80&auth=9298eb03c61f9b7995df9a8c47b7eed8ca9e118c532d97b464527bc3286740b8&width=380'}}
          />
        </View>
        <View style={ styles.caixa3 }>
        <Image
        />
      </View>
    );
  }
}

export default Aula05;

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: 'white',
  },


  caixa1: {
    height: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
  },


  caixa2: {
   flex: 1,
   backgroundColor: 'green',
   alignItems: 'center',
   justifyContent: 'center',
   alignItems: 'center'
   
   
},

  caixa3: {
   backgroundColor: 'blue',
   height: 100,
   alignItems: 'center',
   justifyContent: 'center',
   color: 'white',
   fontSize: 20
},
img1: {
  width: 50,
  height: 50,
}

})

