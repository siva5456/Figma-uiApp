import React, { useState } from 'react'
import { View,Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { set } from 'react-native-reanimated';


function AccountDetials() {
const [myRequest,setMyRequest]=useState(false)
const [changePassword,setChangePassword]=useState(false)
const [chat,setChat]=useState(false)
const [documents,setDocuments]=useState(false)
const [faq,setFaq]=useState(false)


  return (

    <View style={{flex:1,padding:30,paddingHorizontal:20,backgroundColor:'white'}}>
      <List.Accordion style={{height:70}}
      title='My Request'
      left={props=><List.Icon {...props} icon='message'/>}
      expanded={myRequest}
      onPress={()=>setMyRequest(!myRequest)}
      >
        <List.Item title='Request1'/>
        <List.Item title='Request2'/>
        
      </List.Accordion>

      <List.Accordion
      style={{height:70}}
      title='Change Password'
      left={props=><List.Icon {...props} icon='key'/>}
      expanded={changePassword}
      onPress={()=>setChangePassword(!changePassword)}
      >
         <List.Item title='change your password'/>
        
      </List.Accordion>
        
      <List.Accordion
      style={{height:70}}
      title='Chat with us'
      left={props=><List.Icon {...props} icon='message'/>}
      expanded={chat}
      onPress={()=>setChat(!chat)}
      >
       <List.Item title='message1'/>
        <List.Item title='message2'/>
      </List.Accordion>

      <List.Accordion
      style={{height:70}}
      title='My Documents'
      left={props=><List.Icon {...props} icon='file'/>}
      expanded={documents}
      onPress={()=>setDocuments(!documents)}
      >
       
        <List.Item title='Documents1'/>
        <List.Item title='Documents2'/>
      </List.Accordion>

      <List.Accordion
      style={{height:70}}
      title='FAQ'
      left={props=><List.Icon {...props} icon=''/>}
      expanded={faq}
      onPress={()=>setFaq(!faq)}
      >
        <List.Item title='FAQ1'/>
        <List.Item title='FAQ2'/>
      </List.Accordion>

    </View>
  )
}

export default AccountDetials