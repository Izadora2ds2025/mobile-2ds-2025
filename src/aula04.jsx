import React,{Component} from "react";
import { View, Text, StyleSheet,Image  } from "react-native";

class Aula04 extends Component{
    render(){
        return(
            <View style={ styles.container}>
                <Text>Aula04 - trabalhando com imagens!</Text>
                <Image
                  style={ styles.img }
                  source={{ uri: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg'}}
                  />
            </View>
        );
    }
}

export default Aula04;


const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
  
})