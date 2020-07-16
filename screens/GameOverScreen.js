import React from 'react';
import {View,Text,StyleSheet, Button,Image,Dimensions,ScrollView} from 'react-native';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import colors from '../constants/colors';
import MainButton from '../components/MainButton';


const GameOverScreen = props =>{
    return (
        <ScrollView>
    <View style={styles.screen}>
    
    <TitleText style={{fontSize:30}}>
        The Game is over !</TitleText>
        <View style={styles.imageContainer}>
         <Image 
          style={styles.image} 
          source={require('../assets/success.png')}
              resizeMode='cover'
          /> 
          </View>
          <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>Your phone needed
      <Text style={styles.textContainer}> {props.roundsNumber} </Text>
       rounds to guess the number
      <Text style={styles.textContainer}> {props.userNumber} . </Text>
       </BodyText>
       </View>
      
      
   
    <View  style={styles.btn}>
    <MainButton  onPress={props.onRestart}>
    Wanna Play again
    </MainButton>
    </View>
    </View>
    </ScrollView>
   
    )
};


const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10
        
    },
    btn:{
        padding:40
    },
    image:{
        width:'100%',
        height:'100%',
        
      },
      imageContainer:{
        //   width:300,
        width:Dimensions.get('window').width*0.7,
        height:Dimensions.get('window').width*0.7,
          //height:300,
          borderRadius:Dimensions.get('window').width*0.7/2,
          borderWidth:1,
          borderColor:"#000",
          marginVertical:Dimensions.get('window').height/20,
          overflow:'hidden'
      },
      textContainer:{
          color:colors.secondary,
          
      },
      resultContainer:{
          marginHorizontal:30,
          marginVertical:Dimensions.get('window').height/30,
      },
      resultText:{
        textAlign:'center',
        marginVertical:15,
        fontSize:Dimensions.get('window').height < 400 ? 16 :20
    }
})

export default GameOverScreen;


