import React from 'react'
import { View, Text, StyleSheet, Image, } from 'react-native'
import WaterLeakage from '../components/WaterLeakage'


function Request() {



  return (
    <View style={{ flex: 1 }} >

      <View style={styles.dashboard1}>
        <Text style={{ fontSize: 17, fontWeight: '600', margin: 15 }}>New Maintenance Request</Text>

        <View style={{ flex: 4, backgroundColor: '#fff', }}>

          <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', }}>
              <Text style={{ fontSize: 15, fontWeight: '400', marginHorizontal: 18, marginVertical: 0 }}>service Request</Text>

              <View style={{ width: 30, height: 2, backgroundColor: 'black', marginTop: 3 }} ></View>

            </View>

            <View>
              <Text style={{ fontSize: 15, fontWeight: '400', marginHorizontal: 18, marginVertical: 0, color: 'silver' }}>Common Area Request</Text>
            </View>
          </View>

          <View style={styles.dashboard1_box}>

            <View style={styles.dashboard1_div_box}>

              <View style={styles.dashboard1_div_square}>
                <View style={styles.dashboard1_div_circle}>
                  <Image style={styles.dashboard1_div_circle_Image} source={{ uri: 'https://img.icons8.com/external-itim2101-blue-itim2101/1x/external-air-conditioner-household-equipment-itim2101-blue-itim2101.png' }} />
                </View>
                <Text style={{ fontSize: 12, }}>Air-Conditioning failure</Text>


              </View>
              <View style={styles.dashboard1_div_square}>
                <View style={styles.dashboard1_div_circle}>
                  <Image style={styles.dashboard1_div_circle_Image} source={{ uri: 'https://img.icons8.com/external-itim2101-blue-itim2101/1x/external-faucet-currency-itim2101-blue-itim2101.png' }} />

                </View>
                <Text style={{ fontSize: 11, }}>Water Supply Failure or Water Leaks</Text>
                {/* <Text style={{ fontSize: 11, }}></Text> */}


              </View>

              <View style={styles.dashboard1_div_square}>
                <View style={styles.dashboard1_div_circle}>
                  <Image style={styles.dashboard1_div_circle_Image} source={{ uri: 'https://img.icons8.com/fluency/1x/fan-auto.png' }} />

                </View>
                <Text style={{ fontSize: 12, }}>Ventilation/ Exaust failure</Text>

              </View>

            </View>

            <View style={styles.dashboard1_div_box}>

              <View style={styles.dashboard1_div_square}>
                <View style={styles.dashboard1_div_circle}>
                  <Image style={styles.dashboard1_div_circle_Image} source={{ uri: 'https://img.icons8.com/external-itim2101-blue-itim2101/1x/external-natural-gas-plumber-tools-itim2101-blue-itim2101-2.png' }} />

                </View>
                <Text style={{ fontSize: 12, }}>Air Leaks/ Humidity problems </Text>

              </View>
              <View style={styles.dashboard1_div_square}>
                <View style={styles.dashboard1_div_circle}>
                  <Image style={styles.dashboard1_div_circle_Image} source={{ uri: 'https://img.icons8.com/color/1x/fridge.png' }} />

                </View>
                <Text style={{ fontSize: 12, marginLeft: 5.5 }}>Kitchen Appliances falure  </Text>

              </View>

              <View style={styles.dashboard1_div_square}>

              </View>

            </View>

          </View>

          <View>

          </View>

        </View>

        <View style={styles.dashboard2}>
          <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', }}>
              <Text style={{ fontSize: 15, fontWeight: '400', marginHorizontal: 18, marginVertical: 0 }}>Open Request</Text>

              <View style={{ width: 30, height: 2, backgroundColor: 'black', marginTop: 3 }} ></View>

            </View>

            <View>
              <Text style={{ fontSize: 15, fontWeight: '400', marginHorizontal: 18, marginVertical: 0, color: 'silver' }}>Resolved Request</Text>
            </View>
          </View>

          <WaterLeakage />
        </View>




      </View>
    </View>

  )
}
const styles = StyleSheet.create({

  dashboard1: {
    flex: 3,
    backgroundColor: '#fff'
  },
  dashboard1_box: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: 'rgb(210, 210, 210)',
    margin: 18,
    padding: 10
  },
  dashboard1_div_box: {
    flex: 1,
    marginVertical: 3,
    flexDirection: 'row'
  },
  dashboard1_div_square: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 1,
  },
  dashboard1_div_circle: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 50,
    backgroundColor: 'rgba(135, 207, 235, 0.112)',
    alignItems: 'center',
    justifyContent: 'center',

  },
  dashboard1_div_circle_Image: {
    height: 40,
    width: 40,
  },

  dashboard2: {
    flex: 2.8,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
})


export default Request