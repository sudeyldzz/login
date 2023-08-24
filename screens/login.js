import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loginİnput from '../Components/Loginİnput';
import { emailControl } from '../Utils/emailControl';
import { useNavigation } from '@react-navigation/native';



const Loginscreen = () => {
    const[email,setEmail ] = useState('');

    const[password,setPassword ] = useState('');
    const { navigate } = useNavigation();
    

    const onLogin =() => {
    

      const emailControlResult = emailControl(email);
     
      if(!emailControlResult){
        Alert.alert('hata', 'lütfen geçerli bir e-posta adresi giriniz.' );
        return;
      }
      
      if(password.length < 6){
        Alert.alert('hata', 'Şifreniz en az 6 karakter olamlıdır.');
      }

      if(password.length === 6){
        Alert.alert('hata', 'Lütfen şifrenizi giriniz.');
      }




      console.log('email',email);
      console.log('password',password);

    }
  

  return(
  <SafeAreaView style={styles.safe}>
    <View style={styles.safe}>
      <Image source={require('../images/register.png')}/>
         <Text style={styles.title}>Welcome Back 😃</Text>

      <Loginİnput
      lowerCase
      value={email}
      setValue={setEmail}
      />
       

       
      


         <View style={styles.inputContainer}>
          <Text style={styles.titleİnput}>Password</Text>
         <TextInput
          secureTextEntry= {true}
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          placeholder='***************'/> 
        
         </View>
         
         < TouchableOpacity style={ styles.button}onPress={onLogin}>
                <Text style={styles.buttonText}>LOG IN </Text>
            </TouchableOpacity>
            
            
        < TouchableOpacity style={ styles.button1}onPress={onLogin}>
                <Text style={styles.buttonText1}>Log In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('Register')}>
              <Text style={styles.RegisterButton}>Newbie? Create Account</Text>
            </TouchableOpacity>


           </View>
           </SafeAreaView>




      )
}


export default Loginscreen;

const styles= StyleSheet.create({ 
   safe: {
     flex: 1 ,
     backgroundColor: '#fff '

   },
   container: {
    wight:345,
    hight:246,
    margin:50,
    

   },

   title: {
      fontSize:24,
      fontWeight:'700',
      left:90,
      paddingVertical:30,


   },

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
    fontSize: 13,
    paddingBottom:5,


   },
   titleİnput:{
     paddingBottom: 3,
   },
   button:{
     width:'80%',
     paddingLeft:120,
     backgroundColor: '#D93856',
     margin:-8,
     hight:100,
     paddingVertical:10,
    marginLeft:37,
   
   }, 
   buttonText:{
      fontSize:14,
      color:'#fff',
      fontWeight:'500',
   },
   RegisterButton: {
     color:'#000',
     marginTop:0,
     fontSize:14,
     padding:10,
     marginLeft:90,
     
   },
   buttonText1:{
    color:'#fff',
    marginRight:'auto',
    marginLeft:'auto',
    margin:1,
    fontSize:15,
    paddingRight:9,
    paddingLeft:1,
    position:'absolute',
    paddingVertical:6,

   },
   button1:{
     width:'80%',
     backgroundColor: '#D93856',
     hight:100,
     paddingVertical:18,
     marginLeft:37,
     alignItems:'center',
     justifyContent:'center',
     margin:15,

    
   
    
     
    
   }

   }
   


); 