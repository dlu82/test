import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';

const ProductHeader = ({
  headerStyle,
  Text2,
  gridImage,
  cartStyle,
  CentrText,
  Cartno,
  isBack,
  TextStyle,
  isHeart,
  Heart,
  backButton
}) => {
  const navigation = useNavigation();

  return (
    <View style={{...styles.header, ...headerStyle}}>
      {isBack ? (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={{
              width: 35,
              height: 35,
              tintColor: 'grey',
              // transform: [{rotate: '180deg'}],
              ...backButton,
            }}
            source={require('../../assets/back.png')}
          />
        </Pressable>
      ) : (
        <Pressable>
          <Image
            style={{width: 35, height: 35, tintColor: 'grey', ...gridImage}}
            source={require('../../assets/grid.png')}
          />
        </Pressable>
      )}

      <Text style={{...styles.TextStyle, ...TextStyle}}>{CentrText}</Text>
      {isHeart ? (
        <View style={{...styles.CartStyle, ...cartStyle}}>
        <Image
          style={{
            width: 25,
            height: 25,
            tintColor: 'grey',
            marginRight: 12,
            ...gridImage,
          }}
          source={require('../../assets/bag.png')}
        />
        <View style={{...styles.Text2, ...Text2}}>
          <Text style={{}}>{Cartno}</Text>
        </View>
      </View>
      ) : (
        <Image
          style={{
            width: 30,
            height: 30,
            marginRight: 12,
            ...Heart,
          }}
          source={require('../../assets/colour-heart.png')}
        />
      )}
      
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
  TextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
});
