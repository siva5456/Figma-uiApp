import { StyleSheet, Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Dashboard from '../screens/Dashboard';
import MyUnit from '../screens/MyUnit';
import Request from '../screens/Request';
import More from '../screens/More';



const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused
                ? 'view-dashboard'
                : 'view-dashboard-outline';
              return <MaterialCommunityIcons name={iconName} size={40} color={color} />
            } else if (route.name === 'MyUnit') {
              iconName = focused ? 'home' : 'home-outline';
              return <MaterialCommunityIcons name={iconName} size={40} color={color} />

            }
            else if (route.name === 'Request') {
              iconName = focused ? 'message' : 'message-outline';
              return <MaterialCommunityIcons name={iconName} size={40} color={color} />

            } else if (route.name === 'More') {
              return <MaterialIcons name="more-horiz" size={40} color={color} />
            }

            // You can return any component that you like here!


          },
          headerStyle: { backgroundColor: '#2d2d2d' },
          tabBarStyle: { backgroundColor: '#2d2d2d', height: 65 },
          tabBarActiveTintColor: 'rgb(10, 242, 242)',
          tabBarInactiveTintColor: 'rgb(160, 155, 155)',
          headerTintColor: 'white',
          tabBarLabelStyle: { color: 'white', fontSize: 14, },


        })}
      >

        <Tab.Screen name="Dashboard" component={Dashboard} options={{
          headerTitle: 'Muhhamaed', tabBarStyle: { backgroundColor: '#2d2d2d', height: 65 }, headerStyle: { backgroundColor: '#2d2d2d' },
          headerLeft: () => (<View><Text style={{ color: 'grey', position: 'absolute', left: 20, fontSize: 14 }} >Hi</Text></View>),
          headerRight: () => (<View><Text style={{ color: 'white', fontSize: 15, marginRight: 20 }} >Unit 102   <Image style={{ height: 13, width: 13,}} source={require('../../assets/dropDown.png')} /></Text></View>), }}
         />
        <Tab.Screen name="MyUnit" component={MyUnit} options={{
                  headerRight: () => (<View><Text style={{ color: 'white', fontSize: 15, marginRight: 20 }} >Unit 102   <Image style={{ height: 13, width: 13,}} source={require('../../assets/dropDown.png')} /></Text></View>), }}
         />
        <Tab.Screen name="Request" component={Request} options={{ headerTitle: "Maintenance" }} />
        <Tab.Screen name="More" component={More} options={{ headerShown: false }} />

      </Tab.Navigator>
    // </NavigationContainer>

  );
}
