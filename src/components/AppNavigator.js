import React, { useContext } from 'react'
import TabNavigator from './TabNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { LoginContext } from '../../App';
import LoginNavigator from './LoginNavigator';

function AppNavigator() {

  const {isLogin} = useContext(LoginContext)


  return (
    <NavigationContainer>
      {
        isLogin ? <TabNavigator /> : <LoginNavigator />
      }
    </NavigationContainer>
  )
}

export default AppNavigator