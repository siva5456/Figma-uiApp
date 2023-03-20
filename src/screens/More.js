import React from 'react';
import { View, Text, StyleSheet, Image ,Pressable} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import NaviGationList from '../features/NaviGationList';
import NewServiceRequest from '../features/NewServiceRequest';
import AccountDetials from '../features/AccountDetials';
import NewCommonAreaRequest from '../features/NewCommonAreaRequest';
import NewMaintenanceRequest from '../features/NewMaintenanceRequest';
import ChangePassword from '../features/ChangePassword';
import Notification from '../features/Notification';
import Maintenance from '../features/Maintenance';
import MaintenanceRequest from '../features/MaintenanceRequest';
import MyEnqire from '../features/MyEnqire';

const AccountDetialsHeader = () => (
  <View style={styles.conatiner}>
    <View>
      <Image style={styles.Profile_pic} source={{ uri: 'https://timesofindia.indiatimes.com/thumb/msid-49908368,width-1200,height-900,resizemode-4/.jpg' }} />
    </View>
    <View style={{marginLeft:10}}>
      <Text style={{ color: '#fff', fontSize: 20 }} >Sam Mathew</Text>
      <Text style={{ color: 'grey', fontSize: 14 }} >Tenant</Text>
      <Text style={{ color: '#fff', fontSize: 16 }} >Edit Profile</Text>

    </View>
  </View>
)

const Stack = createStackNavigator()
function More({navigation}) {

  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#535353', }, headerTintColor: 'white', }}>
      <Stack.Screen name='NaviGationList' component={NaviGationList} options={{ headerTitle: 'List',
     headerRight: () => (<View style={{marginRight:25}}>
     <Pressable onPress={()=>(navigation.navigate('Notifications'))} >
      <Image style={{height:30,width:30}} source={{ uri:'https://img.icons8.com/external-kmg-design-outline-color-kmg-design/1x/external-bell-interface-essentials-kmg-design-outline-color-kmg-design.png' }} />
      </Pressable>
    </View>)
    }} />
      <Stack.Screen name='NewServiceRequest' component={NewServiceRequest} options={{ headerTitle: 'New Service Request' }} />
      <Stack.Screen name='AccountDetials' component={AccountDetials}
        options={{
          headerTitle: "",
          headerStyle: {backgroundColor: '#2d2d2d', height: 135 },
          headerLeft: () => (<AccountDetialsHeader />),
          headerRight: () => (<View style={{marginRight:25}}><Text style={{ color: '#fff', fontSize: 16 }} >Log out</Text></View>)
        }} />

      <Stack.Screen name='NewCommonAreaRequest' component={NewCommonAreaRequest} options={{ headerTitle: 'New Common Area Request' }} />
      <Stack.Screen name='NewMaintenanceRequest' component={NewMaintenanceRequest} options={{ headerTitle: 'NewMaintenance Request' }} />
      <Stack.Screen name='changePassword' component={ChangePassword} options={{ headerTitle: 'Change Password' }} />
      <Stack.Screen name='Notifications' component={Notification} options={{ headerTitle: 'Notifications' }} />
      <Stack.Screen name='Maintenance' component={Maintenance} options={{ headerTitle: 'Maintenance' }} />
      <Stack.Screen name='MaintenanceRequest' component={MaintenanceRequest} options={{ headerTitle: 'Maintenance Request' }} />
      <Stack.Screen name='MyEnqire' component={MyEnqire} options={{ headerTitle: 'My Enqire' }} />


    </Stack.Navigator>
  )
}
const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent:'space-between',
    marginLeft:15,

  },
  Profile_pic: {
    height: 70,
    width: 70,
    borderWidth: 2,
    borderColor: '#ffff',
    borderRadius: 10,
  }

})

export default More