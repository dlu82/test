import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
} from 'react-native';
import ProductHeader from '../componets/ProductHeader/ProductHeader';

const ItemPage = () => {
  const navigation = useNavigation()
  return (
    <View style={Styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
          <Pressable 
          onPress={() => {
            navigation.goBack();
          }}>
        <View style={Styles.icon}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/back.png')}
          />
        </View>
        </Pressable>
        <View style={{padding: 15, backgroundColor: 'white', borderRadius: 30}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../assets/colour-heart.png')}
          />
        </View>
      </View>
      <View style={Styles.Header}>
        <Image
          style={{height: 300, width: 300}}
          source={require('../assets/CHair/chairwhitebg.png')}
        />
      </View>
      <View style={Styles.footer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            paddingVertical: 35,
          }}>
          <View>
            <Text style={{color: '#403b58', fontSize: 30}}>Chair name</Text>
            <Text style={{color: '#403b58', fontWeight: 'bold'}}>brand</Text>
          </View>
          <View style={Styles.star}>
            <Image
              source={require('../assets/star.png')}
              style={{height: 25, width: 25, marginTop: 10}}
            />
            <Text
              style={{
                alignSelf: 'center',
                color: '#403b58',
                fontSize: 15,
                fontWeight: 'bold',
                margin: 5,
              }}>
              4,7
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 30}}>
          <Text style={{color: '#403b58', fontSize: 15}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            malesuada nibh nec massa ullamcorper, sed convallis libero
            fringilla.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 5,
            marginTop: 10,
            justifyContent: 'space-evenly',
          }}>
          <View style={{borderRadius: 20, backgroundColor: '#f2eeed'}}>
            <Image
              source={require('../assets/CHair/chairwhitebg.png')}
              style={{height: 100, width: 100}}
            />
          </View>
          <View style={{borderRadius: 20, backgroundColor: '#f2eeed'}}>
            <Image
              source={require('../assets/CHair/chairwhitebg.png')}
              style={{height: 100, width: 100}}
            />
          </View>
          <View style={{borderRadius: 20, backgroundColor: '#f2eeed'}}>
            <Image
              source={require('../assets/CHair/chairwhitebg.png')}
              style={{height: 100, width: 100}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginLeft: 15,
            justifyContent: 'space-between',
            marginHorizontal: 30,
          }}>
          <View style={{flexDirection: 'row', marginHorizontal: 25}}>
            <Text style={{color: '#524e68', fontSize: 17}}>Color</Text>
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: 'black',
                marginLeft: 15,
              }}
            />
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: 'lightgrey',
                marginLeft: 15,
              }}
            />
            <View
              style={{
                height: 20,
                width: 20,
                borderRadius: 10,
                backgroundColor: 'grey',
                marginLeft: 15,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#f4f3f4',
              borderRadius: 20,
              padding: 5,
            }}>
            <View
              style={{
                paddingHorizontal: 5,
              }}>
              <Text style={{color: '#403b58'}}>-</Text>
            </View>
            <Text
              style={{fontSize: 16, paddingHorizontal: 5, color: '#403b58'}}>
              1
            </Text>
            <View
              style={{
                paddingHorizontal: 6,
              }}>
              <Text style={{color: '#403b58'}}>+</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderTopWidth: 1,
            borderTopColor: '#ebebeb',
            marginTop: 20,
            justifyContent: 'space-between',
            paddingHorizontal: 30,
            paddingTop: 20,
          }}>
          <Text
            style={{
              color: '#403b58',
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            $102
            <Text style={{color: '#403b58', fontSize: 15, fontWeight: 'bold'}}>
              .00
            </Text>
          </Text>
          <Pressable
            style={Styles.Button}
            onPress={() => {
              alert('Checking Out');
            }}>
            <Text style={Styles.text}>Buy now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
export default ItemPage;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    paddingTop: 20,
  },
  icon: {
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  Header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: '70%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  star: {
    width: 90,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ebebeb',
    borderRadius: 30,
    justifyContent: 'center',
    padding: 5,
  },

  Button: {
    backgroundColor: '#403b58',
    height: 60,
    width: 90,
    // marginHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
