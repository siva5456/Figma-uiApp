import { View, Text, StyleSheet, ScrollView, } from 'react-native'
import React from 'react'

function WaterLeakage() {
    return (

        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{ alignItems: 'center', backgroundColor: '#fff', flex: 1, borderWidth: 1, borderColor: 'rgb(210, 210, 210)', marginVertical: 10, }}>
                <View style={{ width: 280, flexDirection: 'row', margin: 14, marginHorizontal: 10, backgroundColor: '#fff', alignItems: 'center', }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', width: 200, marginRight: 5, }}>

                        <Text style={{ backgroundColor: 'rgb(249, 241, 242)', height: 30, width: 70, paddingTop: 5, color: 'goldenrod', textAlign: 'center', fontSize: 12, }}>
                            In progress
                        </Text>
                        <Text style={{ backgroundColor: 'aliceblue', height: 30, width: 90, textAlign: 'center', paddingTop: 5, color: 'grey', fontSize: 12, margin: 5 }}>
                            Ticket No.:CB1
                        </Text>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{new Date().toLocaleDateString()}</Text>
                </View>
                <View style={{ alignItems: 'flex-start', width: 280, height: 70, }} >

                    <Text style={{ fontSize: 21, marginVertical: 5 }}>Water Leakage Issue</Text>
                    <Text style={{ color: 'grey', fontSize: 12, }}>Tap  seems to be jammed</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', width: 348, height: 52, backgroundColor: 'rgb(240, 245, 249)', marginTop: 8, }} >

                    <Text style={{ marginLeft: -30 }} >A 052</Text>
                    <Text style={{ marginRight: -30 }} >View Details</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', backgroundColor: '#fff', flex: 1, borderWidth: 1, borderColor: 'rgb(210, 210, 210)', marginVertical: 10, }}>
                <View style={{ width: 280, flexDirection: 'row', margin: 14, marginHorizontal: 10, backgroundColor: '#fff', alignItems: 'center', }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row', width: 200, marginRight: 5, }}>

                        <Text style={{ backgroundColor: 'rgb(249, 241, 242)', height: 30, width: 70, paddingTop: 5, color: 'goldenrod', textAlign: 'center', fontSize: 12, }}>
                            In progress
                        </Text>
                        <Text style={{ backgroundColor: 'aliceblue', height: 30, width: 90, textAlign: 'center', paddingTop: 5, color: 'grey', fontSize: 12, margin: 5 }}>
                            Ticket No.:CB1
                        </Text>
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{new Date().toLocaleDateString()}</Text>
                </View>
                <View style={{ alignItems: 'flex-start', width: 280, height: 70, }} >

                    <Text style={{ fontSize: 21, marginVertical: 5 }}>Water Leakage Issue</Text>
                    <Text style={{ color: 'grey', fontSize: 12, }}>Tap  seems to be jammed</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row', width: 348, height: 52, backgroundColor: 'rgb(240, 245, 249)', marginTop: 8, }} >

                    <Text style={{ marginLeft: -30 }} >A 052</Text>
                    <Text style={{ marginRight: -30 }} >View Details</Text>
                </View>
            </View>


        </ScrollView>
    )
}

export default WaterLeakage