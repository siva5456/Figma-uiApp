import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MyAlert = ({toggolemodal,setToggolemodal}) => {
 
const navigation=useNavigation()

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={toggolemodal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!toggolemodal);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={{height:120,width:120}} source={{uri:'https://image.shutterstock.com/image-vector/check-mark-flat-icon-vector-260nw-565380031.jpg'}} />
            <Text style={{ fontSize: 30 }} >Done</Text>

            <Text style={styles.modalText}>your request has been submitted!</Text>
            <Text style={styles.modalText}>Service request n0:#F12014</Text>

            <Pressable
              style={[styles.button]}
              onPress={() =>( setToggolemodal(!toggolemodal),navigation.goBack())}>
              <Text style={styles.textStyle}>continue</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
     
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: '#454545d1',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    position:'relative',
    top:-50,
    width: 300,
    backgroundColor: 'white',
    paddingVertical: 35,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.45,
    shadowRadius:4,
    elevation:4,
  },
  button: {
    height: 50,
    width:200,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
// NaviGationList