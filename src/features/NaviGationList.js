import { View ,TouchableOpacity,Text,StyleSheet} from 'react-native'
import React from 'react';


function NaviGationList({navigation}) {

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<TouchableOpacity style={styles.TouchableOpacity} onPress={()=>(navigation.navigate('AccountDetials'))} >
  <Text style={styles.Text}>Account Detials</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.TouchableOpacity} onPress={()=>(navigation.navigate('NewServiceRequest'))} >
  <Text style={styles.Text}>New Service Request</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.TouchableOpacity} onPress={()=>(navigation.navigate('NewCommonAreaRequest'))} >
  <Text style={styles.Text}>New Common Area Request</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.TouchableOpacity} onPress={()=>(navigation.navigate('NewMaintenanceRequest'))} >
  <Text style={styles.Text}>New Maintenance Request</Text>
</TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    TouchableOpacity:{
        borderBottomWidth:1,
        borderBottomColor:'skyblue',
        height:50,
        alignItems:'center',
        justifyContent:'center',
    },
    Text:{
        color:'skyblue',
        fontSize:20,

    }
})

export default NaviGationList