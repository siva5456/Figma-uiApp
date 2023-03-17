import React from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet,Pressable,Image } from 'react-native'

export default function ChangePassword({ navigation }) {
    return (

        <View style={{ flex: 1, padding: 25, backgroundColor: '#fff', }} >

            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 15 }} >Old password</Text>
                <TextInput style={styles.TextInput} placeholder="Air-conditioning failure" />
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 14 }} >New password</Text>
                <TextInput style={styles.TextInput} placeholder="Air-conditioning failure" />
            </View>
            <View style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 14 }} >conform password</Text>
                <TextInput style={styles.TextInput} placeholder="Air-conditioning failure" />
            </View>




           
            <Pressable
                        style={styles.submit_button} onPress={() => (navigation.goBack(), alert('password changed successfully'))}>
                        <Image style={{ height: 20, width: 20 }} source={require('../../assets/greatarThan.png')} />
                        <Text style={{ fontSize: 17, color: '#fff', marginRight: 65, }} >Submit</Text>

                    </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({

    TextInput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10,
        marginTop: 5,
    },
    submit_button: {
        height: 50,
        padding: 10,
        marginTop: 5,
        backgroundColor: '#454545',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',

    }
})