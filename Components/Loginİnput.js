import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

 const Loginİnput = ({value, setValue, lowerCase = false}) => {
  return (
    <View style={styles.inputContainer}>
        <Text>Email</Text>
         <TextInput
            value={value}
            onChangeText={text => setValue(lowerCase ? text.toLocaleLowerCase(): text)}
            style={styles.input}
            placeholder='Johnsondoe@nomail.com'/> 
        
         </View>

        




  )
  }

export default Loginİnput;

const styles= StyleSheet.create({ 
   
 
    
 
     inputContainer:{
      width:'100%',
      hight: 48,
      paddingLeft: 25,
      paddingRight: 25,
     paddingBottom:5,
 
     
 
 
     
 
    },
    input:{
     width:'100%',
     hight:48,
     borderBottomColor:'#000',
     marginBottom: 44,
     borderBottomWidth: 1,
     fontSize: 16,
     paddingBottom:5,
 
 
    }
    
 
 
 });