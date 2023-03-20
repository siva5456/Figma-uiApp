import React, { useState } from 'react'
import { ScrollView, View, Text, Pressable } from 'react-native'
import WaterLeakage from '../components/WaterLeakage'
import { Filter } from './Filter'


const ServiceRequest = ({ commonServie, setcommonServie }) => {

  let handleCommonServie = () => (setcommonServie(!commonServie))

  return (
    <>
      <Pressable
        style={{ alignItems: 'center', flex: 1, borderBottomWidth: 1, borderBottomColor: 'black', paddingVertical: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0 }}>Service Request</Text>
      </Pressable>

      <Pressable
        onPress={handleCommonServie}
        style={{ alignItems: 'center', flex: 1, borderBottomWidth: 1, borderBottomColor: 'silver', paddingVertical: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0, color: 'silver' }}>Common Area Request</Text>
      </Pressable>
    </>
  )
}

const AreaRequest = ({ commonServie, setcommonServie }) => {
  let handleCommonServie = () => (setcommonServie(!commonServie))

  return (
    <>
      <Pressable
        onPress={handleCommonServie}
        style={{ alignItems: 'center', flex: 1, borderBottomWidth: 1, borderBottomColor: 'silver', paddingVertical: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0, color: 'silver' }}>Service Request</Text>
      </Pressable>
      <Pressable
        style={{ alignItems: 'center', flex: 1, borderBottomWidth: 1, borderBottomColor: 'black', paddingVertical: 20 }}>
        <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0, }}>Common Area Request</Text>

      </Pressable>
    </>
  )
}



function Maintenance() {

  const [toggolemodal, setToggolemodal] = useState(false)
  const [commonServie, setcommonServie] = useState(true)
  const [color, setColor] = useState(true)




  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }} >
      <ScrollView>
        <View style={{ backgroundColor: '#fff', flexDirection: 'row', marginVertical: 10, }}>

          {
            commonServie ? <ServiceRequest commonServie={commonServie} setcommonServie={setcommonServie} /> : <AreaRequest commonServie={commonServie} setcommonServie={setcommonServie} />
          }
        </View>
        <View style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
        }}>
          <View style={{ backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
            <Pressable
              disabled={!color}
              onPress={() => setColor(!color)}
              style={{ alignItems: 'center', }}>
              <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0, color: color ? 'silver' : 'black' }}>Open Request</Text>
            </Pressable>

            <Pressable
              disabled={color}
              onPress={() => setColor(!color)}
              style={{ marginRight: 24 }}>
              <Text style={{ fontSize: 15, fontWeight: '400', marginVertical: 0, color: color ? 'black' : 'silver' }}>Resolved Request</Text>
            </Pressable>
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