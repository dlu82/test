import {
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';

const ButtonComponent = ({label, btnStyle, txtStyle, tapOn}) => {
  return (
    <Pressable onPress={() => tapOn()} 
      style={{...styles.Button, ...btnStyle}}>
      <Text style={{...styles.text, ...txtStyle}}>{label}</Text>
    </Pressable>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#ffff',
    height: 45,
    width: '80%',
    // marginVertical:30,
    marginHorizontal: 30,
    // marginLeft: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
