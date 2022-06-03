import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  View, StyleSheet, ImageBackground, Text, Image, Pressable
}from 'react-native';
import ProductHeader from '../componets/ProductHeader/ProductHeader';

const OneProduct = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={require('../assets/Cup.jpg')}>
      <ProductHeader
        headerStyle={{paddingHorizontal: 20, paddingTop: 50}}
        Text2={{backgroundColor: 'white'}}
        Cartno={'4'}
        gridImage={{tintColor: 'white'}}
        cartStyle={{borderColor: 'white', borderWidth: 2}}
        isBack
      />
      <View style={styles.heartLogo}>
        <Image
          style={{
            height: 60,
            width: 40,  
            tintColor: 'white',
          }}
          source={require('../assets/heart.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{flex: 1}}></View>
      <View>
        <View style={styles.plus}>
          <Image
            source={require('../assets/Plus.png')}
            style={{
              height: 50,
              width: 30,
              tintColor: 'white',
            }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'flex-end',
            marginRight: 63,
            margin: 10,
          }}>
          1
        </Text>
        <View style={styles.plus}>
          <Image
            source={require('../assets/minus.png')}
            style={{
              height: 60,
              width: 30,
              tintColor: 'white',
            }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.itemTitle}>Thermal{'\n'}Cup</Text>
          <Text style={styles.itemTitle}>$15</Text>
        </View>
          <Pressable style={styles.addButtn}
          onPress={()=>{
            navigation.navigate('Cart')
          }}>
          <Text style={{color: 'white', fontSize: 15, padding: 10}}>Add</Text>
          <Image
            source={require('../assets/right-arrow.png')}
            style={{
              height: 50,
              width: 20,
              tintColor: 'white',
            }}
            resizeMode="contain"
          />

      </Pressable>
      </View>

    </ImageBackground>
  );
};
export default OneProduct;

const styles = StyleSheet.create({
  heartLogo: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
    marginTop: 10,
    borderRadius: 10,
  },
  plus: {
    height: 80,
    width: 80,
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
    marginTop: 10,
    borderRadius: 10,
  },
  addButtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#a2a0a3',
  },
  itemTitle: {
    color: '#fff',
    fontSize: 25,
    marginLeft: 20,
    fontWeight: 'bold',
    // width: '60%',
  },
});
