import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
// import ChatBot from 'react-native-chatbot';

function MyEnqire() {

    const [inputVal, setInputVal] = useState()
    const [steps, setsteps] = useState([
        {
            id: 1,
            message: ` Lorem Ipsum is simply dummy textof the printing and typesetting industry. Lorem Ipsum`
        }
    ])


    let handlechat = () => {

        if (inputVal.length !== 0) {
            setsteps([...steps, {
                id: steps.length + 1,
                message: inputVal
            }])

        } else {
            alert('empty')
        }

        setInputVal('')
    }



    return (

        <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>

                </View>

                <View style={{ height: 100, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#F5F5F5', marginBottom: 15, }} >

                    <View style={{ backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                        <View style={{ flexDirection: 'row' }} >
                            <Image style={{ height: 30, width: 80 }} source={require('../../assets/KHIDMAH.png')} />
                            <Text style={{ fontSize: 20 }}>
                                Hi there!
                            </Text>
                        </View>
                        <Image style={{ height: 25, width: 25 }} source={{ uri: 'https://img.icons8.com/ios/1x/secured-letter.png' }} />
                    </View>

                    <Text style={{ fontSize: 14 }}>
                        Welcome to Hhidmah! How Can We help You Today?
                    </Text>
                </View>

                <View style={{ flex: 1, backgroundColor: '#fff' }} >

                    <View style={{ flex: 1, alignItems: 'flex-start', paddingRight: 30 }} >

                        <View style={styles.chat1} >
                            <Text>
                                Lorem Ipsum is simply dummy text
                                of the printing and typesetting
                                industry. Lorem Ipsum has been
                                the industry's standard dummy
                                text ever since the 1500s, when an
                            </Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end', minHeight: 230, paddingLeft: 30 }} >


                        {steps.map((item) => {
                            return (
                                <View key={item.id} style={styles.chat2} >
                                    <Text style={{ color: 'white' }}>
                                        {item.message}
                                    </Text>
                                </View>

                            )
                        })}

                    </View>


                </View>


            </ScrollView>
            <View style={{ backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#F5F5F5', marginBottom: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10 }} >
                <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'space-between', padding: 15, }} >
                    <TextInput style={styles.TextInput} placeholder='type your message' defaultValue={inputVal} onChangeText={setInputVal} />
                    <TouchableOpacity onPress={handlechat}>
                        <Image style={{ height: 25, width: 25 }} source={require('../../assets/telegram.png')} />
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#F0F0F0', borderRadius: 10 }} >

                    <Image style={{ height: 25, width: 25 }} source={require('../../assets/gallery.png')} />
                    <Image style={{ height: 25, width: 25 }} source={require('../../assets/camera.png')} />

                </View>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    chat1: {
        backgroundColor: '#F5F5F5',
        padding: 15,
        paddingRight: 20,
        borderTopRightRadius: 8,
        width: 298,
        alignItems: 'flex-start',
        marginBottom: 15
    },
    chat2: {
        backgroundColor: '#535353',
        padding: 15,
        paddingRight: 20,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        marginVertical: 10,


    },
    TextInput: {
        width: 150,
    }
})

export default MyEnqire