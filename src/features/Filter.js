import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';

export const Filter = ({ toggolemodal, setToggolemodal }) => {

    const [select, setSelect] = useState(false)

    return (

        <Modal
            animationType="slide"
            transparent={true}
            visible={toggolemodal}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!toggolemodal);
            }}>

            <View style={styles.modalView1}></View>
            <View style={styles.modalView}>
        <ScrollView>
                <View style={{ height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'silver', paddingHorizontal: 10 }} >
                    <Text style={{ textAlign: 'center' }} >Filter</Text>
                    <Pressable
                        onPress={() => setToggolemodal(!toggolemodal)}>
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>×</Text>
                    </Pressable>

                </View>
                <View style={{ flex: 1, backgroundColor: '#fff', padding: 25,}} >

                    <View style={{ height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',marginTop:18,marginBottom:30,}} >

                        <View>
                            <Text >From Date</Text>
                            <Pressable
                                style={styles.Date}
                                onPress={() => setToggolemodal(!toggolemodal)}>
                                <Text style={{color:'silver'}}>DD/MM/YY</Text>
                                <Image style={{height:20,width:20}} source={{uri:'https://img.icons8.com/cotton/1x/calendar--v2.png'}}  />
                            </Pressable>
                        </View>
                        <View>
                            <Text>To Date</Text>
                            <Pressable
                                style={styles.Date}
                                onPress={() => setToggolemodal(!toggolemodal)}>
                                <Text style={{color:'silver'}}>DD/MM/YY</Text>
                                <Image style={{height:20,width:20}} source={{uri:'https://img.icons8.com/cotton/1x/calendar--v2.png'}}  />
                            </Pressable>
                        </View>

                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Funtional Location</Text>
                        <View style={[styles.TextInput, { justifyContent: 'center', padding: 0 }]}>
                            <Picker
                                selectedValue={select}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelect(itemValue)
                                }>
                                <Picker.Item style={{ color: 'silver' }} label="Water Leak" value="Water Leak" />
                                <Picker.Item label="Air-conditioning failure" value="Air-conditioning failure" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Request Number</Text>
                        <View style={[styles.TextInput, { justifyContent: 'center', padding: 0 }]}>
                            <Picker
                                selectedValue={select}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelect(itemValue)
                                }>
                                <Picker.Item style={{ color: 'silver' }} label="Water Leak" value="Water Leak" />
                                <Picker.Item label="Air-conditioning failure" value="Air-conditioning failure" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Service Type</Text>
                        <View style={[styles.TextInput, { justifyContent: 'center', padding: 0 }]}>
                            <Picker
                                selectedValue={select}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelect(itemValue)
                                }>
                                <Picker.Item style={{ color: 'silver' }} label="Water Leak" value="Water Leak" />
                                <Picker.Item label="Air-conditioning failure" value="Air-conditioning failure" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 14 }} >Status</Text>
                        <View style={[styles.TextInput, { justifyContent: 'center', padding: 0 }]}>
                            <Picker
                                selectedValue={select}
                                onValueChange={(itemValue, itemIndex) =>
                                    setSelect(itemValue)
                                }>
                                <Picker.Item style={{ color: 'silver' }} label="Water Leak" value="Water Leak" />
                                <Picker.Item label="Air-conditioning failure" value="Air-conditioning failure" />
                            </Picker>
                        </View>
                    </View>

                <View style={{ height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10,marginTop: 25,}} >
                    <Text style={{ fontSize: 16,textAlign: 'center',color: 'silver' }} >Clear Filter</Text>
                    <Pressable
                    style={styles.button}
                    onPress={() => setToggolemodal(!toggolemodal)}>
                        <Image  style={{height:20,width:20}} source={require('../../assets/greatarThan.png')} />
                             <Text style={{ fontSize: 17, color: '#fff',marginRight: 25,}} > Apply</Text>

                </Pressable>
                </View>
                </View>
                
        </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({

    modalView: {
        flex: 0.8,
        backgroundColor: 'white',
        // paddingVertical: 35,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.45,
        shadowRadius: 4,
        elevation: 4,
    },
    modalView1: {
        flex: 0.2,
        backgroundColor: '#454545d1',
    },
    Date: {
        height: 48,
        width: 140,
        padding: 10,
        marginTop: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
        borderWidth: 1,
        borderColor: 'silver',

    },
    button: {
        height: 50,
        width: 150,
        padding: 10,
        marginTop: 5,
        backgroundColor: '#454545',
        alignItems: 'center',
        justifyContent:'space-evenly',
        flexDirection:'row',
    },
    TextInput: {
        height: 48,
        borderWidth: 1,
        borderColor: 'silver',
        padding: 10,
        marginTop: 5,
    },



});
