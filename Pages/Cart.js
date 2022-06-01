import React from 'react';

import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import ProductHeader from '../componets/ProductHeader/ProductHeader';

const cartData = [
  {
    title: 'Nike Mens Shoe',
    quantity: 1,
    price: '$129',
    imageURL: require('../assets/Shoes/1.jpg'),
    backgroundColor: 'grey',
  },
  {
    title: 'Puma Mens Shoe',
    quantity: 3,
    price: '$155',
    imageURL: require('../assets/Shoes/2.jpg'),
    backgroundColor: 'darkgreen',
  },
  {
    title: 'Adidas Mens Shoe',
    quantity: 8,
    price: '$222',
    imageURL: require('../assets/Shoes/3.jpg'),
    backgroundColor: 'darkorange',
  },
  {
    title: 'Fila Mens Shoe',
    quantity: 1,
    price: '$75',
    imageURL: require('../assets/Shoes/Nike.jpeg'),
    backgroundColor: 'blue',
  },
];

const Cart = ({}) => {
  return (
    <View style={Styles.container}>
      <ProductHeader
      Text2={4}
        headerStyle={{
          paddingHorizontal: 20,
          paddingTop: 10,
          backgroundColor: 'lightblue',
        }}
        CentrText={'Shopping Cart'}
      />
      <ScrollView>
        <View style={Styles.Products}>
          <FlatList
            data={cartData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#cdd4d3',
                  }}>
                  <View>
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: item.backgroundColor,
                      }}></View>
                    <Image
                      style={{
                        height: 80,
                        width: 80,
                        borderRadius: 10,
                        marginTop: 15,
                      }}
                      source={item.imageURL}
                    />
                  </View>
                  <View>
                    <Text style={{fontSize: 17, color: 'black'}}>
                      {item.title}{' '}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 20,
                        width: '50%',
                      }}>
                      <Text style={{fontSize: 20, width: 75}}>
                        {item.price}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          borderWidth: 1,
                          borderColor: 'grey',
                          // justifyContent: 'space-between',
                        }}>
                        <View
                          style={{
                            backgroundColor: 'grey',
                            paddingHorizontal: 5,
                          }}>
                          <Text style={{color: 'white'}}>+</Text>
                        </View>
                        <Text style={{fontSize: 16, paddingHorizontal: 5}}>
                          {item.quantity}
                        </Text>
                        <View
                          style={{
                            backgroundColor: 'grey',
                            paddingHorizontal: 6,
                          }}>
                          <Text style={{color: 'white'}}>-</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          {/* {[1,2,3].map((item,index)=>{return(
            
        )})} */}
        </View>
        <View style={Styles.Money}>
          <View style={Styles.Total}>
            <Text>SubTotal</Text>
            <Text>$2,000</Text>
          </View>

          <View style={Styles.Total}>
            <Text>Shipping Cost</Text>
            <Text>$20</Text>
          </View>

          <View style={Styles.Total}>
            <Text>Taxes</Text>
            <Text>$15</Text>
          </View>

          <View style={Styles.Total}>
            <Text style={{fontSize: 15,fontWeight: 'bold', color: 'black'}}>Total</Text>
            <Text style={{fontSize: 15,fontWeight: 'bold', color: 'black'}}>$2035</Text>
          </View>
        </View>
        <Pressable style={Styles.Button}>
            <Text style={Styles.text}>CHECKOUT</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
export default Cart;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#d5dedd',
    flex: 1,
  },
  Products: {
    //   height: '50%',
    width: '90%',
    backgroundColor: 'white',
    marginHorizontal: 22,
    marginVertical: 30,
    elevation: 5,
  },
  Money: {
    backgroundColor: 'black',
    width: '90%',
    backgroundColor: 'white',
    marginHorizontal: 22,
    marginVertical: 30,
    elevation: 5,
  },
  Total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cdd4d3',
  },
  Button: {
    backgroundColor: 'lightblue',
    height: 45,
    width: '80%',
    marginHorizontal: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 55
 },

  text: {
    fontSize: 20,
    color: '#e8eded',
    fontWeight: 'bold',
  },
});
