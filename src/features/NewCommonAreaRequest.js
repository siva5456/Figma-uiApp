import React, { useState } from 'react'
import { Image, TextInput, TouchableOpacity, View, Text, ScrollView, StyleSheet, Pressable } from 'react-native'
import { MyAlert } from './MyAlert'
import { Picker } from '@react-native-picker/picker'



function NewCommonAreaRequest() {

    const [toggolemodal, setToggolemodal] = useState(false)
    const [air, setAir] = useState();
    const [water, setWater] = useState();


    return (
        <View style={{ flex: 1, paddingHorizontal: 15, padding: 5, backgroundColor: '#fff' }} >
            <ScrollView indicatorStyle={false} >


                <View style={styles.emergency_bar}>
                    <View  >

                        <Text style={{ fontSize: 17 }} >Emergency?</Text>

                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }} >

                        <View style={styles.call_Icon}>
                            <Image style={styles.call_Icon_Image} source={{ uri: 'https://img.icons8.com/external-gradak-royyan-wijaya/1x/external-call-gradak-communikatok-gradak-royyan-wijaya-5.png' }} />
                        </View>
                        <Text style={{ fontSize: 17 }} >800 55 66</Text>

                    </View>
                </View>

                <View style={{ paddingHorizontal: 15, }} >

                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 15 }} >Common Area</Text>
                        <View style={[styles.TextInput, { justifyContent: 'center', padding: 0 }]}>

                            <Picker placeholder='Air-conditioning failure'
                                selectedValue={air}
                                onValueChange={(itemValue, itemIndex) =>
                                    setAir(itemValue)
                                }>
                                <Picker.Item style={{ color: 'silver' }} label="Air-conditioning failure" value="Air-conditioning failure" />
                                <Picker.Item label="Water Leak" value="Water Leak" />
                            </Picker>
                        </View>

                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Service Type</Text>
                        <View style={[styles.TextInput, { justifyContent: 'center', padding: 0 }]}>

                            <Picker
                                selectedValue={water}
                                onValueChange={(itemValue, itemIndex) =>
                                    setWater(itemValue)
                                }>
                                <Picker.Item style={{ color: 'silver' }} label="Water Leak" value="Water Leak" />
                                <Picker.Item label="Air-conditioning failure" value="Air-conditioning failure" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Issue Description</Text>
                        <TextInput style={styles.TextInput} placeholder="Air-conditioning failure" />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Title</Text>
                        <TextInput style={styles.TextInput} placeholder="Water Leak" />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Caller Name</Text>
                        <TextInput style={styles.TextInput} placeholder="Water Leak" />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Caller Mobile Number</Text>
                        <TextInput style={styles.TextInput} placeholder="Water Leak" />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Description</Text>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                            style={[styles.TextInput, { height: 150, marginBottom: 10, paddingTop: 0, alignItems: 'flex-end', justifyContent: 'flex-start' }]} placeholder=""
                        />
                    </View>
                    <View >
                        <Text style={{ fontSize: 13 }} >{`Attach Image/Video (Optional)`}</Text>
                    </View>
                    <View style={[styles.emergency_bar, { alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(249, 241, 242)' }]}>
                        <Text style={{ fontSize: 17 }} >Attach Image/Video</Text>
                    </View>
                   
                    <Pressable
                        style={styles.submit_button} onPress={() => setToggolemodal(!toggolemodal)}>
                        <Image style={{ height: 20, width: 20 }} source={require('../../assets/greatarThan.png')} />
                        <Text style={{ fontSize: 17, color: '#fff', marginRight: 65, }} >Submit</Text>

                    </Pressable>
                    <MyAlert toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    emergency_bar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#f1f5f9',
        height: 55,
        padding: 15,
        marginVertical: 15,
        paddingHorizontal: 25

    },

    call_Icon: {
        height: 30,
        width: 30,
        borderColor: 'skyblue',
        borderRadius: 50,
        backgroundColor: 'rgb(105, 189, 192)',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,

    },
    call_Icon_Image: {
        height: 15,
        width: 15,
    },
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


export default NewCommonAreaRequest