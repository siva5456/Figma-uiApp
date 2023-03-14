import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NaviGationList from '../features/NaviGationList';
import NewServiceRequest from '../features/NewServiceRequest';
import AccountDetials from '../features/AccountDetials';
import NewCommonAreaRequest from '../features/NewCommonAreaRequest';
import NewMaintenanceRequest from '../features/NewMaintenanceRequest';

const Stack=createStackNavigator()
function More() {

  return (
    <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#2d2d2d',}, headerTintColor: 'white',}}>
      <Stack.Screen name='NaviGationList' component={NaviGationList} options={{headerTitle:'List'}} />
      <Stack.Screen name='NewServiceRequest' component={NewServiceRequest} options={{headerTitle:'New Service Request'}} />
      <Stack.Screen name='AccountDetials' component={AccountDetials} options={{headerTitle:'Account Detials'}} />
      <Stack.Screen name='NewCommonAreaRequest' component={NewCommonAreaRequest} options={{headerTitle:'New Common Area Request'}} />
      <Stack.Screen name='NewMaintenanceRequest' component={NewMaintenanceRequest} options={{headerTitle:'NewMaintenance Request'}} />

    
    </Stack.Navigator>
  )
}

export default More