import React from 'react'
import { TextInput, TouchableOpacity, View, Text, StyleSheet, } from 'react-native'

export default function ForgotPassword({ navigation }) {
    return (

        <View style={{ flex: 1, padding: 25, backgroundColor: '#fff', }} >
            <View style={{ alignItems: 'center', justifyContent: 'center',marginBottom:30 }} >
                <Text style={{ fontSize: 16 }}>Set the new password for your acccount so you can login and access all the features.</Text>

            </View>
            <View style={{ marginVertical: 10 }}>
                <TextInput style={styles.TextInput} placeholder="Enter New Password"
                    placeholderTextColor="black"
                />
            </View>
            <View style={{ marginVertical: 10 }}>
                <TextInput style={styles.TextInput} placeholder="Re-enter New Password"
                    placeholderTextColor="black"
                />
            </View>


            <TouchableOpacity style={styles.submit_button} onPress={() => (navigation.goBack(), alert('password changed successfully'))} >
                <Text style={{ fontSize: 17, color: '#fff' }} >RESET PASSWORD</Text>

            </TouchableOpacity>
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
        marginTop: 35,
        backgroundColor: '#454545',
        alignItems: 'center',
        justifyContent: 'center',
    }
})