import React from 'react';

import {View, StyleSheet, Text, TextInput} from 'react-native';

const TextInputComponents = ({txt, Textinput,containerStyle}) => {
  return (
    <TextInput
      style={{...styles.placeholder,...containerStyle}}
      placeholder={Textinput}
      placeholderTextColor="black"
    />
  );
};
export default TextInputComponents;

const styles = StyleSheet.create({
  placeholder: {
    height: 45,
    width: '80%',
    borderWidth: 3,
    borderColor: 'grey',
    
    marginVertical:15,
    margin: 30,
    borderRadius: 30,
    textAlign: 'left',
    padding: 15
  },
});
