import React from 'react'
import { View, Text, StyleSheet, ScrollView, } from 'react-native'
import WaterLeakage from '../components/WaterLeakage'

function Dashboard() {
    return (
        <View style={styles.conatiner}>
      <ScrollView indicatorStyle={false} >


            <View style={styles.dashboard1}>
                <Text style={{ color: '#fff', fontSize: 17 }} >Request OverView</Text>
                <View style={styles.dashboard_container}>
                    <View style={{ flex: 1, flexDirection: 'row', }} >

                        <View style={[styles.four_dashBoards, { backgroundColor: "rgba(255, 255, 255, 0.112)", borderColor: 'white', }]}>
                            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
                                03
                            </Text>
                            <Text style={{ color: '#e4d7d7', fontSize: 17 }}>

                                Open Issues
                            </Text>
                        </View>
                        <View style={[styles.four_dashBoards, { backgroundColor: "rgba(218, 165, 32, 0.112)", borderColor: 'goldenrod', }]}>
                            <Text style={{ color: 'goldenrod', fontSize: 30, fontWeight: 'bold' }}>
                                03
                            </Text>
                            <Text style={{ color: '#e4d7d7', fontSize: 17 }}>

                                Inprogress
                            </Text>
                        </View>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }} >

                        <View style={[styles.four_dashBoards, { backgroundColor: "rgba(0, 128, 0, 0.112)", borderColor: 'green', }]}>
                            <Text style={{ color: 'green', fontSize: 30, fontWeight: 'bold' }}>
                                10
                            </Text>
                            <Text style={{ color: '#e4d7d7', fontSize: 17 }}>
                                Closed
                            </Text>
                        </View>
                        <View style={[styles.four_dashBoards, { backgroundColor: "rgba(135, 207, 235, 0.112)", borderColor: 'skyblue', }]}>
                            <Text style={{ color: 'skyblue', fontSize: 30, fontWeight: 'bold' }}>
                                03
                            </Text>
                            <Text style={{ color: '#e4d7d7', fontSize: 17 }}>
                                Cancel
                            </Text>
                        </View>

                    </View>

                </View>


            </View>

            <View style={styles.dashboard2}>
                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginVertical: 13, }}>
                    <Text style={{ fontSize: 17, fontWeight: '600' }}>Recent Request</Text>
                    <Text style={{ fontSize: 14, }}> See all {`>`}  </Text>

                </View>

                <WaterLeakage />
            </View>


            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    dashboard1: {
        flex: 1.4,
        paddingHorizontal: 30,
        paddingVertical: 20,

        backgroundColor: '#454545'
    },

    dashboard_container: {
        flex: 2,
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 0,
        // justifyContent:'space-between'
    },
    four_dashBoards: {
        flex: 1,
        borderRadius: 12,
        margin: 12,
        borderWidth: 1.8,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,

    },
    dashboard2: {
        flex: 2,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
    },



})
export default Dashboard