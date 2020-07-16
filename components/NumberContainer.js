import Colors from "../constants/colors";
import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const NumberContainer = props =>{
    return(
        <View style={Styles.container}>
            <Text style={Styles.number}>
            {props.children}

            </Text>
        </View>
    )
};

const Styles = StyleSheet.create({
    container : {
        borderWidth:2,
        borderColor:Colors.secondary,
        padding: 10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center'
    },
    number:{
        color: Colors.secondary,
        fontSize: 20,

    }
})

export default NumberContainer;
