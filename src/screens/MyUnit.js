import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import WaterLeakage from '../components/WaterLeakage'


function MyUnit() {

  return (
    <View style={styles.conatiner}>
            <ScrollView indicatorStyle={false} >

        <View style={styles.dashboard1}>

          <Image style={{ height: 183, flex: 1 }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_pWpfK1KEzYWYc5MxisA0N7mzBvJAbMg3uA&usqp=CAU' }} />

          <View style={{ width: 410, height: 71, backgroundColor: 'aliceblue', paddingVertical: 12, paddingHorizontal: 25 }} >

            <Text style={{ fontSize: 17, fontWeight: '500' }}>AI - Sufouh</Text>

            <View style={{ flexDirection: 'row', }}>
              <Image style={{ height: 18, width: 18, marginLeft: -5 }} source={{ uri: 'https://img.icons8.com/ios/1x/marker.png' }} />
              <Text style={{ fontSize: 12, color: 'rgb(98, 97, 97)', }}>Dubai, United Arab Emirates</Text>
            </View>

          </View>
          <View style={{ marginHorizontal: 25, paddingHorizontal: 15, marginVertical: 15, paddingVertical: 20, backgroundColor: 'rgb(249, 241, 242)' }} >
            <Text style={{ fontSize: 15, fontWeight: '600' }}>Total Service Request</Text>
            <Text style={{ fontSize: 28, marginTop: 10, fontWeight: '600' }}> 41</Text>
          </View>

          <View>

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
    flex: 4,
    backgroundColor: '#fff'
  },


  dashboard2: {
    flex: 2,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
})

export default MyUnit