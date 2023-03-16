import React, { useState } from 'react'
import { View ,ScrollView} from 'react-native'
import { List } from 'react-native-paper';


function AccountDetials({navigation}) {
const [myRequest,setMyRequest]=useState(false)
const [changePassword,setChangePassword]=useState(false)
const [chat,setChat]=useState(false)
const [documents,setDocuments]=useState(false)
const [faq,setFaq]=useState(false)


  return (

    <View style={{flex:1,padding:30,paddingHorizontal:20,backgroundColor:'white'}}>
      <ScrollView indicatorStyle={false} >

      <List.Accordion style={{height:70}}
      title='My Request'
      left={props=><List.Icon {...props} icon='message-text'/>}
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
      onPress={()=>(navigation.navigate('changePassword'))}
      >
        
        
      </List.Accordion>
        
      <List.Accordion
      style={{height:70}}
      title='Chat with us'
      left={props=><List.Icon {...props} icon='message-text'/>}
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
      left={props=><List.Icon {...props} icon='message-draw'/>}
      expanded={faq}
      onPress={()=>setFaq(!faq)}
      >
        <List.Item title='FAQ1'/>
        <List.Item title='FAQ2'/>
      </List.Accordion>
      </ScrollView>

    </View>
  )
}

export default AccountDetials