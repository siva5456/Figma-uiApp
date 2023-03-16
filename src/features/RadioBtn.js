import React, { useState } from 'react';
import { View } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default function RadioBtn() {

    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: '10:30-12:00',
            value: 'option1',
            size:15,
            disabled:true,
        },
        {
            id: '2',
            label:'10:30-12:00',
            value: 'option2',
            size:15,

        },
        {
            id: '3',
            label:'10:30-12:00',
            value: 'option2',
            size:15,
            disabled:true,
        },
        
    ]);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

    return (
        <View style={{alignItems:'center'}}>

        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={onPressRadioButton} 
            layout='row'
            />
            
            </View>
    );
}