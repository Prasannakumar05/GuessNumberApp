import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet, TextInput,Button,TouchableWithoutFeedback,
     Keyboard, Alert,Dimensions,ScrollView,KeyboardAvoidingView} from 'react-native';
import Card from '../components/Card';
import colors from '../constants/colors'
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';


const StartScreen = props =>{

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width/4);

   

   

    const numberInputHandled = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () =>{
        setEnteredValue('');
        setConfirmed(false);
    };
    const confirmInputHandler = ()=>{
        const ChosenNumber = parseInt(enteredValue);
        if(isNaN(ChosenNumber) || ChosenNumber<=0 || ChosenNumber >99){
            Alert.alert('Invalid number!!','Number should range from 1 to 99',[{text:'Okay', style:'destructive',onPress : resetInputHandler()}])
           
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(ChosenNumber);
        Keyboard.dismiss();
      
    };
    useEffect(() =>{
        const upDateLayout = () =>{
            setButtonWidth(Dimensions.get('window').width/4);
        };
        Dimensions.addEventListener('change',upDateLayout);
        return () =>{
            Dimensions.removeEventListener('change',upDateLayout);
        };
    });

    let confirmedOutput ;
    if(confirmed){
        confirmedOutput =
        <Card style={styles.summaryContainer}>
        <BodyText style={styles.text}>Chosen Number</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={()=>props.onStartGame(selectedNumber)}>Start Game</MainButton>
        </Card>
    }

    return(
     <ScrollView>
     <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
        }}
        >
        <View style={styles.screen}>
            <TitleText style={styles.title}>Start The Game!</TitleText>
            <Card style={styles.inputContainer}>
                <BodyText>Select a Number</BodyText>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} 
                    keyboardType="number-pad" maxLength={2} onChangeText={numberInputHandled} value= {enteredValue}
                />
                 <View style={styles.buttonContainer}>
                 <View style={{width:buttonWidth}}>
                    <Button title='confirm' onPress={confirmInputHandler} color={colors.primary} />
                   </View>
                 <View style={{width:buttonWidth}}>
                 <Button  onPress={resetInputHandler} title='Reset' color={colors.secondary}/>
                 </View>
                   
                   
                 </View>
            </Card>
            
                {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',
        
        
    },
    title:{
        fontSize:35,
        marginVertical:10,
       
       },
    inputContainer:{
        width:'80%',
        minWidth:300,
        alignItems:'center',
        maxWidth:'95%'
        

    },
    buttonContainer:{
        
        flexDirection:'row',
        justifyContent: 'space-between',
        maxWidth:'90%',
        width:'100%',
        paddingHorizontal:1,
        
    },
    // button:
    // {
    //     width:Dimensions.get('window').width / 4
    //     //width:100
    // },
   
   
    
    input:{
        width:50,
        textAlign:'center',
        maxWidth:'80%',

        
    },
    summaryContainer:{
        marginTop:40,
        alignItems:'center',
        width:'50%'
    },
    
    
});

export default StartScreen;