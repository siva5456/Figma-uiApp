import React,{useState} from 'react'
import { Pressable } from 'react-native'
import { ScrollView, View, Text } from 'react-native'
import WaterLeakage from '../components/WaterLeakage'
import { Filter } from './Filter'

function Maintenance() {

  const [toggolemodal, setToggolemodal] = useState(false)


  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
      <ScrollView>
        <View style={{ backgroundColor: '#fff', flexDirection: 'row', marginVertical: 10, }}>
          <View style={{ alignItems: 'center', flex: 1, borderBottomWidth: 1, borderBottomColor: 'black', paddingVertical: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0 }}>Service Request</Text>


          </View>
          <View style={{ alignItems: 'center', flex: 1, borderBottomWidth: 1, borderBottomColor: 'silver', paddingVertical: 20 }}>

            <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0, color: 'silver' }}>Common Area Request</Text>


          </View>

        </View>
        <View style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
        }}>
          <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
            <View style={{ alignItems: 'center', }}>
              <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0 }}>Open Request</Text>


            </View>

            <View style={{ marginRight: 24 }}>
              <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0, color: 'silver' }}>Resolved Request</Text>
            </View>
            <View>

              <Pressable onPress={() => setToggolemodal(!toggolemodal)}>
                <Text style={{ fontSize: 13, fontWeight: '400', marginVertical: 0, color: 'black', }}>Filter</Text>
              </Pressable>

            </View>
          </View>
          <View style={{ paddingHorizontal: 15 }}>

            <WaterLeakage />
          </View>
        </View>
      </ScrollView>
      <Filter toggolemodal={toggolemodal} setToggolemodal={setToggolemodal} />

    </View>
  )
}

export default Maintenance