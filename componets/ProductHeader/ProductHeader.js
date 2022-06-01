import React from 'react';

import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

const ProductHeader = ({headerStyle, Text2, gridImage, cartStyle, CentrText }) => {
  return (
    <View style={{...styles.header,...headerStyle}} >
      <Image
        style={{width: 35, height: 35, tintColor: 'grey',...gridImage}}
        source={require('../../assets/grid.png')}
      />
      <Text style={{}}>{CentrText}</Text>
      <View style={{...styles.CartStyle,...cartStyle}}>
        <Image
          style={{width: 25, height: 25, tintColor: 'grey', marginRight: 12,...gridImage}}
          source={require('../../assets/bag.png')}
        />
        <View style={{...styles.Text2,...Text2}}>
          <Text style={{}}>{Text2}</Text>
        </View>
      </View>
    </View>
  );
};
export default ProductHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  CartStyle: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
  },
  Text2: {
    backgroundColor: '#9c1485',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
