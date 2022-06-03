import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {View, StyleSheet, Text, Image, TextInput, FlatList} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'All',
    selected: true,
  },
  {
    id: '2',
    title: 'Chair',
    selected: false,
  },
  {
    id: '3',
    title: 'Table',
    selected: false,
  },
  {
    id: '4',
    title: 'Lamp',
    selected: false,
  },
  {
    id: '5',
    title: 'Floor',
    selected: false,
  },
];

const FURNITURE = [
  {
    id: '1',
    title: 'Irul Chair',
    brand: 'by Seto',
    description: 'Ergonomical for humans body curve',
    imageURL: require('../assets/CHair/1.jpeg'),
  },
  {
    id: '2',
    title: 'Malik CHair',
    brand: 'by Karjo',
    description: 'Comfy Chair',
    imageURL: require('../assets/CHair/1.jpeg'),
  },
  {
    id: '3',
    title: 'Seto Chair',
    brand: 'by Widji',
    description: 'Super Duper For Human Spine',
    imageURL: require('../assets/CHair/1.jpeg'),
  },
  {
    id: '4',
    title: 'Nadan Chair',
    brand: 'by Seto',
    description: 'Rich for humans body curve',
    imageURL: require('../assets/CHair/1.jpeg'),
  },
];

const HomePage = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <View style={styles.VerticalData}>
      <Text style={{fontSize: 19, color: '#635a6e'}}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={{fontSize: 40, fontWeight: 'bold', color: '#403b58'}}>
          Best Furniture
        </Text>
        <Text style={{fontSize: 30, color: '#403b58'}}>Perfect Choice!</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={styles.Search}>
          <Image
            style={{
              width: 20,
              height: 20,
              tintColor: 'grey',
              marginLeft: 30,
              marginTop: 10,
              tintColor: '#635a6e',
            }}
            source={require('../assets/Search.png')}
          />
          <TextInput placeholder="Search" style={{fontSize: 16}} />
        </View>
        <View style={styles.Filter}>
          <Image
            style={{
              width: 35,
              height: 35,
              tintColor: '#635a6e',
            }}
            source={require('../assets/filter.png')}
          />
        </View>
      </View>
      <View>
        <FlatList
          style={{paddingLeft: 20}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={renderItem}
        />
      </View>

      <View style={styles.Products}>
        <FlatList
          data={FURNITURE}
          renderItem={({item,}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                }}>
                <View>
                  
                  <Image
                    style={{
                      height: 100,
                      width: 100,
                      borderRadius: 10,
                      // marginTop: 15,
                    }}
                    source={item.imageURL}
                  />
                </View>
                <View>
                  <Text style={{fontSize: 17, color: 'black'}}>
                    {item.title}
                  </Text>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      paddingVertical: 20,
                      width: '50%',
                    }}>
                    <Text style={{fontSize: 20, width: 75}}>{item.brand}</Text>
                    <View>
                      <Text>{item.description}</Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  Header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  Search: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
  },
  Filter: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  VerticalData: {
    height: 40,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Product: {
    // height: 350,
    // width: '50%',
    marginRight: 10,
    paddingVertical: 20
  },
});
