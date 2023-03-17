import React, { useContext } from 'react'
import { ScrollView } from 'react-native'
// import { Pressable } from 'react-native'
// import { View,Text,Image } from 'react-native'
import { TextInput, TouchableOpacity, View, Text, StyleSheet, Image,Pressable } from 'react-native'

import { LoginContext } from '../../App'

// function Logi() {

//   const  { isLogin,setIsLogin}=useContext(LoginContext)

//   return (
//    <View>
//     <Image style={{height:100,width:250}} source={require('../../assets/KHIDMAH.png')} />
//     <Text>
//         Login screen
//     </Text>
//     <Pressable 
//     onPress={()=>setIsLogin(true)}
//     style={{height:50,backgroundColor:'blue'}} >
//       <Text style={{color:'white'}} >
//         Login
//       </Text>
//     </Pressable>
//    </View>
// }

function ContactKhidmah({ navigation }) {
  const { isLogin, setIsLogin } = useContext(LoginContext)

  return (

    <View style={styles.container} >
<ScrollView>

      <View style={{
         alignItems: 'center',
        justifyContent: 'center',
      }} >

        <Image style={{ height: 100, width: 250 }} source={require('../../assets/KHIDMAH.png')} />


      </View>
      <View style={{
        height: 90, alignItems: 'flex-start',
        justifyContent: 'center', backgroundColor: '#fff'
      }} >

        <Text style={{ fontSize: 16, color: 'grey',fontWeight:'900' }} >PLEASE CONTACT KHIDMAH TEAM</Text>
      </View>

      <View style={{ flex: 1 }} >
      <Text style={{ fontSize: 15, color: '#3d3b3bd1' }} >Enter your Details</Text>

        <TextInput style={styles.TextInput} placeholder="First Name"
          placeholderTextColor="black"
          />
        <TextInput style={styles.TextInput} placeholder="Last Name" 
          placeholderTextColor="black"
          />
        <TextInput style={styles.TextInput} placeholder="Mobile no"
          placeholderTextColor="black"
          />
        <TextInput style={styles.TextInput} placeholder="Email"
          placeholderTextColor="black"
          />

        <View style={styles.AttachTenancy}>
                        <Text style={{ fontSize: 15 }} >Attach TenancyContract</Text>
                    </View>

       
        <Pressable
          style={styles.submit_button}  onPress={() => (navigation.goBack())}>
          <Image style={{ height: 20, width: 20 }} source={require('../../assets/greatarThan.png')} />
          <Text style={{ fontSize: 17, color: '#fff', marginRight: 65, }} >Submit</Text>

        </Pressable>

      </View>

      </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    paddingTop:70,

  },
  TextInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'silver',
    padding: 10,
    marginVertical: 7,
  },
  AttachTenancy: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(249, 241, 242)',
    height: 55,
    padding: 10,
    marginVertical: 10,
    paddingHorizontal: 25
  },
  submit_button: {
    height: 50,
    padding: 10,
    marginVertical: 25,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
  }
})

export default ContactKhidmah