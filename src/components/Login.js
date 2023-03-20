import React, { useContext } from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Image, Pressable } from 'react-native'

import { LoginContext } from '../../App'



function Login({ navigation }) {
  const { isLogin, setIsLogin } = useContext(LoginContext)

  return (

    <View style={styles.container} >

      <View style={{ flex: 0.5, alignItems: 'center',justifyContent: 'center',}} >
        <Image style={{ height: 100, width: 250 }} source={require('../../assets/KHIDMAH.png')} />
      </View>
      <View style={{ height: 90, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff'}} >
        <Text style={{ fontSize: 19, color: 'grey' }} >ACCOUNT LOGIN</Text>
      </View>

      <View style={{ flex: 1 }} >
        <TextInput style={styles.TextInput} placeholder="User Name" placeholderTextColor="black"/>
        <TextInput style={styles.TextInput} placeholder="Password" placeholderTextColor="black"/>

        <TouchableOpacity style={{ alignItems: 'flex-end', justifyContent: 'center', }}
          onPress={() => (navigation.navigate('ForgotPassword'))} >
          <Text style={{ fontSize: 14, color: 'silver' }} >Forgot password?</Text>
        </TouchableOpacity>

        <Pressable
          style={styles.submit_button} onPress={() => setIsLogin(true)}>
          <Image style={{ height: 20, width: 20 }} source={require('../../assets/greatarThan.png')} />
          <Text style={{ fontSize: 17, color: '#fff', marginRight: 65, }} >SIGN IN</Text>
        </Pressable>
        <View style={{alignItems: 'center',justifyContent: 'center',}} >
          <TouchableOpacity
            onPress={() => (navigation.navigate('ContactKhidmah'))} >
            <Text style={{ fontSize: 17, color: 'black' }} >Contact Khidmah?</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
  },
  TextInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'silver',
    padding: 10,
    marginVertical: 7,
  },
  submit_button: {
    height: 50,
    padding: 10,
    marginVertical: 25,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  }
})

export default Login