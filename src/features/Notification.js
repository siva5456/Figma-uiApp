import { View, Text, Image, Pressable, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

function Notification() {
    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: '#fff', }} >
            <ScrollView indicatorStyle={false} >

                <View style={{ marginBottom: 30, padding: 4 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <Text style={{ fontSize: 16, marginBottom: 19 }}>Today</Text>
                        <Text style={{ fontSize: 16, marginBottom: 19 }}>9 hrs</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >

                        <View style={[styles.Image_View, { marginLeft: 10 }]}>
                            <Image style={styles.Image} source={require('../../assets/calnder.png')} />
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 17 }}>
                                Service Request Submitted
                            </Text>
                            <Text style={{ fontSize: 13, color: 'grey' }}>
                                your service request hasbeen submitted succesffully
                            </Text>
                        </View>

                    </View>
                    <Pressable style={[styles.button, { width: 150 }]} >
                        <Text style={{ color: 'white' }} >Reshudule</Text>
                    </Pressable>
                </View>

                <View style={{ marginBottom: 30, padding: 4 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <Text style={{ fontSize: 16, marginBottom: 19 }}>Today</Text>
                        <Text style={{ fontSize: 16, marginBottom: 19 }}>9 hrs</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >

                        <Image style={{ height: 60, width: 60, marginRight: 15, marginLeft: 0 }} source={{ uri: 'https://image.shutterstock.com/image-vector/check-mark-flat-icon-vector-260nw-565380031.jpg' }} />

                        <View style={{ marginBottom: 20, }}>
                            <Text style={{ fontSize: 17 }}>
                                You AC Repair is done on
                            </Text>
                            <Text style={{ fontSize: 17 }}>
                                12-jun at 11:29 AM
                            </Text>
                            <Text style={{ fontSize: 13, color: 'grey' }}>
                                your service request hasbeen submitted succesffully
                            </Text>
                        </View>

                    </View>
                    <Pressable style={[styles.button, { backgroundColor: '#d3d3d3' }]} >
                        <Text style={{ color: 'black' }} >Rate Us</Text>
                    </Pressable>
                </View>
                <View style={{ marginBottom: 30, padding: 4 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >
                        <Text style={{ fontSize: 16, marginBottom: 19 }}>24-May-2021</Text>
                        <Text style={{ fontSize: 16, marginBottom: 19 }}>Yesterday</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >

                        <View style={[styles.Image_View, { marginLeft: 10, backgroundColor: '#d3d3d3', }]}>
                            <Image style={{ height: 25, width: 25, }} source={{ uri: 'https://img.icons8.com/offices/1x/document.png' }} />
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 17 }}>
                                Service Request Submitted
                            </Text>
                            <Text style={{ fontSize: 13, color: 'grey' }}>
                                your service request hasbeen submitted succesffully
                            </Text>
                        </View>

                    </View>
                    <Pressable style={[styles.button, { backgroundColor: '#d3d3d3' }]} >
                        <Text style={{ color: 'black' }} >Download</Text>
                    </Pressable>
                </View>

                <View style={{ marginBottom: 30, padding: 4 }} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} >

                        <View style={[styles.Image_View, { marginLeft: 10 }]}>
                            <Image style={styles.Image} source={require('../../assets/calnder.png')} />
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <Text style={{ fontSize: 17 }}>
                                Service Request Submitted
                            </Text>
                            <Text style={{ fontSize: 13, color: 'grey' }}>
                                your service request hasbeen submitted succesffully
                            </Text>
                        </View>

                    </View>
                    <Pressable style={[styles.button, { width: 150 }]} >
                        <Text style={{ color: 'white' }} >Reshudule</Text>
                    </Pressable>
                </View>

            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        width: 120,
        height: 40,
        paddingHorizontal: 15,
        marginTop: 5,
        marginLeft: 55,
        backgroundColor: '#454545',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
    },
    Image_View: {
        height: 40,
        width: 40,
        borderRadius: 50,
        backgroundColor: 'pink',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Image: {
        height: 25,
        width: 25,

    },


})

export default Notification