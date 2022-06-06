import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
  Pressable,
} from 'react-native';

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
    title: 'Malik Chair',
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
    <View style={styles.VerticalData(item.selected)}>
      <Text style={styles.VerticaldataText(item.selected)}>{item.title}</Text>
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
      <Pressable
        onPress={() => {
          navigation.navigate('ItemPage');
        }}>
        <View style={styles.Product}>
          <FlatList
            data={FURNITURE}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    // justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    borderRadius: 20,
                    marginBottom: 20,
                  }}>
                  <View>
                    <ImageBackground
                      borderRadius={15}
                      style={{
                        height: 140,
                        width: 140,
                        marginTop: 15,
                      }}
                      source={item.imageURL}>
                      <Image />
                    </ImageBackground>
                  </View>
                  <View style={{marginLeft: 20}}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#403b58',
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                    <View
                      style={{
                        paddingVertical: 20,
                        width: '50%',
                      }}>
                      <Text
                        style={{fontSize: 17, width: 100, color: '#403b58'}}>
                        {item.brand}
                      </Text>
                      <View>
                        <Text
                          numberOfLines={2}
                          style={{fontSize: 17, width: 200, color: '#403b58'}}>
                          {item.description}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{color: '#403b58'}}>$102.00</Text>
                      <Pressable
                        style={styles.Button}
                        onPress={() => {
                          navigation.navigate('cart');
                        }}>
                        <Text style={styles.text}>Buy</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </Pressable>
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
  VerticalData: selected => ({
    height: 40,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: selected ? '#403b58' : '#ebebeb',
    borderRadius: 20,
    marginTop: 10,
  }),
  VerticaldataText: selected => ({
    fontSize: 18,
    color: selected ? 'white' : '#635a6e',
  }),
  Product: {
    height: 500,
    width: '90%',
    marginLeft: 20,
    marginRight: 10,
    paddingVertical: 30,
    paddingBottom: 60,
  },
  Button: {
    backgroundColor: '#403b58',
    height: 26,
    width: 60,
    marginHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
});
