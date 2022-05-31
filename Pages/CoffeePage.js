import React from 'react';

import SafeAreaWrapper from '../componets/SafeAreaWrapper/SafeAreaWrapper';
import AppHeader from '../componets/AppHeader/AppHeader';
import constants from '../Constants/Constants';

import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  FlatList,
  ImageBackground,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Sort',
  },
  {
    id: '2',
    title: 'New',
  },
  {
    id: '3',
    title: 'Popular',
  },
  {
    id: '4',
    title: 'Sale',
  },
  {
    id: '5',
    title: 'Rating',
  },
  {
    id: '6',
    title: 'All',
  },
];

const CoffeePage = () => {
  const renderItem = ({item}) => (
    <View style={styles.scrollStyle}>
      <Text style={{fontSize: 12}}>{item.title}</Text>
    </View>
  );

  const listedPrdcts = ({item}) => (
    <View style={styles.Product}>
      <ImageBackground
        borderRadius={20}
        style={{height: 260}}
        source={{
          uri: 'https://perfectdailygrind.com/wp-content/uploads/2019/11/Cappuccino-1.png',
        }}>
        <Image
          style={{
            height: 52,
            width: 35,
            tintColor: 'white',
            alignSelf: 'flex-end',
            marginRight: 20,
            marginTop: 10,
          }}
          source={require('../assets/heart.png')}
          resizeMode="contain"
        />
      </ImageBackground>
      <Text style={{paddingTop: 25}}>New</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 5,
        }}>
        <Text
          numberOfLines={2}
          style={{
            color: '#9c1485',
            fontSize: 15,
            fontWeight: 'bold',
            width: '60%',
          }}>
          {item.title}
        </Text>

        <Text style={{color: '#9c1485'}}>$15</Text>
      </View>

      {/* <Text
        numberOfLines={2}
        style={{color: 'black', fontSize: 14, fontWeight: 'bold', padding: 10}}>
        {item.description}
      </Text> */}
      {/* <Text style={{ color:'black',fontSize: 13,fontWeight: 'bold',padding:10}}>rating: {item.rating.rate} *</Text> */}
    </View>
  );

  return (
    <SafeAreaWrapper>
      <View style={styles.header}>
        <Image
          style={{width: 35, height: 35, tintColor: 'grey'}}
          source={require('../assets/grid.png')}
        />
        <View style={styles.CartStyle}>
          <Image
            style={{width: 25, height: 25, tintColor: 'grey',marginRight: 12}}
            source={require('../assets/bag.png')}
          />
          <View style={styles.Text2}>
            <Text style={{}}>2</Text>
            </View>
        </View>
      </View>
      <View style={styles.Search}>
        <Image
          style={{
            width: 20,
            height: 20,
            tintColor: 'grey',
            marginRight: 5,
            marginTop: 10,
          }}
          source={require('../assets/Search.png')}
        />
        <TextInput placeholder="Search" />
      </View>
      <FlatList
        style={{marginTop: 20, height: 60}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={DATA}
        renderItem={renderItem}
      />
      <FlatList
        style={{marginTop: 10}}
        showsVerticalScrollIndicator={false}
        bounces={false}
        numColumns={2}
        data={constants.samplApi}
        renderItem={listedPrdcts}
      />
    </SafeAreaWrapper>
  );
};

export default CoffeePage;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Search: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#d8e6e5',
    borderRadius: 10,
    // margin: 5,
    padding: 5,
    marginTop: 20,
  },

  scrollStyle: {
    height: 40,
    width: 70,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CartStyle: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    alignItems: 'center'
  },
  Text2: {
    backgroundColor: '#9c1485',
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'

  },

  prdctImg: {
    // width: 160,
    height: 260,
    borderRadius: 50,
  },

  Product: {
    height: 350,
    width: '48%',
    marginRight: 10,
  },
});
