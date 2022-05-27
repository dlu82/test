import React from 'react';
import SafeAreaWrapper from '../componets/SafeAreaWrapper/SafeAreaWrapper';
import AppHeader from '../componets/AppHeader/AppHeader';
import constants from '../Constants/Constants'
import { View, Image, StyleSheet, Text, FlatList } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Weekend',
    },
    {
        id: '2',
        title: 'Comfy',
    },
    {
        id: '3',
        title: 'Travel',
    },
    {
        id: '4',
        title: 'Meetings',
    },
    {
        id: '5',
        title: 'Function',
    },
    {
        id: '6',
        title: 'All',
    },
];

const Product = () => {

    const renderItem = ({ item }) => (
        <View style={styles.scrollStyle}>
            <Text style={{ fontSize: 15, }}>{item.title}</Text>
        </View>
    );
    const listedPrdcts = ({ item }) => (
        <View  style={styles.Product}>
            <Image
                source={{ uri: (item.image) }} style={{ width: 150, height: 200, alignContent:'center',alignItems:'center' }}
            />
            <Text numberOfLines={2} style={{ color:'black',fontSize: 15,fontWeight: 'bold',paddingTop:20,}}>{item.title}</Text>
            <Text style={{ color:'black',fontSize: 14,fontWeight: 'bold',padding:10}}>$ {item.price}</Text>
            <Text style={{ color:'black',fontSize: 13,fontWeight: 'bold',padding:10}}>rating: {item.rating.rate} *</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <AppHeader isBack Head={'OCCASION'} subHead={'SHOW AVAILABLE'} />

            <FlatList
            style={{marginTop:20,height:55}}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={DATA}
                renderItem={renderItem}
            />
            <FlatList
                  style={{marginTop:20}}
                numColumns={2}
                data={constants.sampleData}
                renderItem={listedPrdcts} />

        </View>
    );
};
export default Product;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        // paddingVertical: 20,
        // margin:20
    },

    scrollView: {
        backgroundColor: 'gray',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 15,
    },
    scrollStyle: {
        // height: 30,
        paddingVertical:10,
        width: 80,
        // marginTop: 10,
        marginRight: 10,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Product:{
        padding: 5,
        height:350,
        width: '50%',
        elevation: 10,
        // backgroundColor: '#c7d1c9',
        // marginBottom: 10,
        borderRadius: 10,
        margin: 5,
    }
});
