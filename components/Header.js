import React from 'react'
import {View ,Text,StyleSheet,Platform} from 'react-native';
import colors from '../constants/colors';
import BodyText from '../components/BodyText';
import defaultStyles from '../constants/default-styles';


const Header = props =>{
    return(
        <View style={{...styles.headerBase, 
        ...Platform.select({
            ios:styles.headerIOS ,
            android: styles.headerAndroid
            })
        }}>
       
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase:{
        width: '100%',
        height:90,
        paddingTop:36,
        alignItems:'center',
        justifyContent:"center",
       
    },
    headerIOS:{ 
        backgroundColor:'#fff',
        borderBottomColor:'#ccc',
        borderBottomWidth:1
    },
    headerAndroid:{
        backgroundColor:colors.primary,
        

    },

    headerTitle:{
        fontSize:25,
        color:'#fff'
    }
    
   
});

export default Header;
