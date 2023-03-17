import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { View,Text } from 'react-native'
import Login from './Login'
import ForgotPassword from './ForgotPassword'
import ContactKhidmah from './ContactKhidmah'

const LoginStack=createStackNavigator()


function LoginNavigator() {
  return (
    <LoginStack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: '#2d2d2d', }, headerTintColor: 'white', }}
    >
        <LoginStack.Screen name='login' component={Login} options={{headerShown:false}} />
        <LoginStack.Screen name='ForgotPassword' component={ForgotPassword} />

        <LoginStack.Screen name='ContactKhidmah' component={ContactKhidmah} options={{headerShown:false}}  />
   
    </LoginStack.Navigator>
  )
}

export default LoginNavigator