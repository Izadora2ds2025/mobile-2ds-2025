import React,{Component} from "react";
import { View, Text, StyleSheet  } from "react-native";

class Aula01 extends Component{
    render(){
        return(
            <View style={ StyleSheet.container }>
                <View style={ StyleSheet.caixa1 }>1</View>
                <View style={ StyleSheet.caixa2 }>2</View>
                <View style={ StyleSheet.caixa3 }>3</View>
            </View>
                
        );
    }
}
export default Aula05;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    texto:{
        color: 'black',
        fontSize: 50,
    }
})