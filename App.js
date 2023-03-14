import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Dashboard from './src/screens/Dashboard';
import MyUnit from './src/screens/MyUnit';
import Request from './src/screens/Request';
import More from './src/screens/More';



const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Dashboard') {
              iconName = focused
                ? 'view-dashboard'
                : 'view-dashboard-outline';
              return <MaterialCommunityIcons name={iconName} size={35} color={color} />
            } else if (route.name === 'MyUnit') {
              iconName = focused ? 'home' : 'home-outline';
              return <MaterialCommunityIcons name={iconName} size={35} color={color} />

            }
            else if (route.name === 'Request') {
              iconName = focused ? 'message' : 'message-outline';
              return <MaterialCommunityIcons name={iconName} size={35} color={color} />

            } else if (route.name === 'More') {
              return <MaterialIcons name="more-horiz" size={35} color={color} />
            }

            // You can return any component that you like here!


          },
          headerStyle: { backgroundColor: '#2d2d2d' },
          tabBarStyle: { backgroundColor: '#2d2d2d', },
          tabBarActiveTintColor: 'rgb(10, 242, 242)',
          tabBarInactiveTintColor: 'rgb(160, 155, 155)',
          headerTintColor: 'white',
          tabBarLabelStyle: { color: 'white', fontSize: 12, },


        })}
      >
        <Tab.Screen name="Request" component={Request} options={{ headerTitle:"Maintenance" }}/>

        <Tab.Screen name="Dashboard" component={Dashboard} options={{
          headerTitle: 'Muhhamaed', tabBarStyle: { backgroundColor: '#2d2d2d' }, headerStyle: { backgroundColor: '#2d2d2d' },
          headerLeft: () => (<View><Text style={{ color: 'grey', position: 'absolute', left: 20, fontSize: 14 }} >Hi</Text></View>),
          headerRight: () => (<View><Text style={{ color: 'white', fontSize: 15, marginRight: 20 }} >Unit 102 <Text style={{ color: 'white', fontSize: 23, }}>▽</Text> </Text></View>),
        }} />
        <Tab.Screen name="MyUnit" component={MyUnit} options={{
          headerRight: () => (<View><Text style={{ color: 'white', fontSize: 15, marginRight: 20 }} >Unit 102 <Text style={{ color: 'white', fontSize: 23, }}>▽</Text> </Text></View>),
        }} />
        <Tab.Screen name="More" component={More} />


      </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
{/* <View style={styles.container}>
      <Text>Open up App</Text>a
      <StatusBar style="auto" />
    </View> */}