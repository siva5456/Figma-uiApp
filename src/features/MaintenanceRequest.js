import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'

function MaintenanceRequest() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ backgroundColor: '#F4F4F4', padding: 20, }} >

                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 25 }} >
                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }} >

                            <Image style={{ height: 30, width: 30 }} source={require('../../assets/home.png')} />
                            <Text style={{ fontSize: 20, marginHorizontal: 7 }} >SR : 34343345</Text>

                        </View>
                        <Text style={{ fontSize: 13, color: 'rgb(173, 171, 171)', marginBottom: 10 }} >4 hours ago</Text>

                    </View>

                    <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 15, backgroundColor: '#E6E6E6', }} >
                        <View style={{ alignItems: 'flex-start', }} >

                            <Text style={{ fontSize: 18 }} >SR : 34343345</Text>
                            <Text style={{ fontSize: 14, color: '#3d3b3bd1', marginVertical: 5 }} >9898587858</Text>

                        </View>
                        <Pressable style={{ backgroundColor: 'rgb(7, 152, 7)', height: 45, width: 110, alignItems: 'center', justifyContent: 'center' }}>

                            <Text style={{ fontSize: 18, color: '#fff' }} >Open</Text>
                        </Pressable>

                    </View>
                    <Text style={{ fontSize: 18, marginVertical: 15, }}>General Inforamation</Text>


                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Functional location </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>FL Name </Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Service Type  </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Appliances </Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Issue Description </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Cooling issue </Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Created At </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>26.10.2022 10:13:36</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Prefered Date </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>26.10.2022 12:00:12</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Competed At </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Na </Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Title </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Qqwewefwtg</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Description  </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Lorem ispum is simply dummy text of the priniting antypesetting industry</Text>
                        </View>
                    </View>

                </View>


                <View style={{ backgroundColor: '#F4F4F4', padding: 20, marginVertical: 30 }} >

                    <Text style={{ fontSize: 18, marginVertical: 15, }}>General Inforamation</Text>


                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Feedback </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>NA</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>Before Comment </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>NA </Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row', paddingVertical: 12,
                    }}>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>After Comment </Text>
                        </View>
                        <View style={{ flex: 0.7, }}>
                            <Text style={{ fontSize: 14 }}>NA </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 14 }}>Attachment</Text>

                        <View style={{
                            paddingVertical: 12,
                            alignItems: 'center'
                        }}>

                            <Image style={{ height: 150, width: 300, }} source={{ uri: 'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6' }} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14 }}>Signature</Text>

                        <View style={{
                            paddingVertical: 12,
                            alignItems: 'center'
                        }}>

                            <Image style={{ height: 150, width: 300, }} source={{ uri: 'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6' }} />
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 14 }}>Before Image</Text>

                        <View style={{
                            paddingVertical: 12,
                            alignItems: 'center'
                        }}>

                            <Image style={{ height: 150, width: 300, }} source={{ uri: 'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6' }} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 14 }}>Before Image</Text>

                        <View style={{
                            paddingVertical: 12,
                            alignItems: 'center'
                        }}>

                            <Image style={{ height: 150, width: 300, }} source={{ uri: 'https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6' }} />
                        </View>
                    </View>


                </View>
                <View style={{
                    backgroundColor: 'rgb(246, 244, 244)',
                    padding: 20,

                }} >
                    <View style={{
                        backgroundColor: 'rgb(246, 244, 244)',
                        borderBottomWidth: 1,
                        borderBottomColor: 'silver',
                        paddingBottom: 20,
                    }} >
                        <View style={{ backgroundColor: 'rgb(246, 244, 244)', flexDirection: 'row', }} >
                            <View style={{ flex: 0.5, }}>

                                <View style={{ flexDirection: 'row', }} >

                                    <View style={{
                                        height: 40,
                                        width: 40,
                                        borderRadius: 50,
                                        backgroundColor: '#CDD0F6',
                                        marginBottom: 20,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 20, color: 'black' }} >MI</Text>

                                    </View>
                                    <View style={{ marginBottom: 0 }} >

                                        <Text style={{ fontSize: 18, marginHorizontal: 7, }} >John</Text>
                                        <Text style={{ fontSize: 16, marginHorizontal: 7, }} >Tenant | you</Text>

                                    </View>

                                </View>

                            </View>
                            <View style={{ flex: 0.7, }}>
                                <Text style={{ fontSize: 15, marginHorizontal: 7, textAlign: 'right' }} >11 Am on Friday 23rd may</Text>

                            </View>

                        </View>
                        <Text style={{ fontSize: 12, marginHorizontal: 7, color: 'silver' }} >Your Request has been submitted</Text>

                    </View>



                </View>

                <View style={{
                    backgroundColor: 'rgb(246, 244, 244)',
                    padding: 20,

                }} >
                    <View style={{
                        backgroundColor: 'rgb(246, 244, 244)',
                        paddingBottom: 20,
                    }} >
                        <View style={{
                            backgroundColor: 'rgb(246, 244, 244)',

                            flexDirection: 'row',

                        }} >
                            <View style={{
                                flex: 0.5,


                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                }} >

                                    <View style={{
                                        height: 40,
                                        width: 40,
                                        borderRadius: 50,
                                        backgroundColor: '#CDD0F6',
                                        marginBottom: 20,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 20, color: 'black' }} >MI</Text>

                                    </View>
                                    <View style={{ marginBottom: 0 }} >

                                        <Text style={{ fontSize: 18, marginHorizontal: 7, }} >John</Text>
                                        <Text style={{ fontSize: 16, marginHorizontal: 7, }} >Tenant | you</Text>

                                    </View>

                                </View>

                            </View>
                            <View style={{ flex: 0.7, }}>
                                <Text style={{ fontSize: 15, marginHorizontal: 7, textAlign: 'right' }} >11 Am on Friday 23rd may</Text>

                            </View>

                        </View>
                        <Text style={{ fontSize: 12, marginHorizontal: 7, color: 'silver' }} >Technicain will arrive between | 11 Am | 25 may</Text>
                        <View style={{
                            flex: 1,
                            alignItems: 'flex-end'
                        }}>
                            <Pressable style={{
                                width: 150,
                                height: 40,
                                paddingHorizontal: 15,
                                marginTop: 25,
                                marginLeft: 55,
                                backgroundColor: '#454545',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }} >
                                <Text style={{ color: 'white' }} >Reshudule</Text>
                            </Pressable>
                        </View>

                    </View>



                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 20,

        },


    }
)

export default MaintenanceRequest