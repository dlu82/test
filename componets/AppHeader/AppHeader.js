import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';


import SafeAreaWrapper from '../SafeAreaWrapper/SafeAreaWrapper';
import {useNavigation} from '@react-navigation/native';

const AppHeader = ({isBack, Head, subHead, tapIn, isImage}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Head}>
        {isBack && (
          <Pressable onPress={() => navigation.goBack()}>
            {isImage ? (
              <Image
                style={{width: 40, height: 38}}
                source={
                  require('../../assets/grid.png')}
              />
            ) : (
              <Text>Back</Text>
            )}
          </Pressable>
        )}

        <View style={{flexDirection: 'column', marginLeft: 100}}>
          <Text style={styles.Maintext}>{Head}</Text>
          <Text style={styles.SubText}>{subHead}</Text>
        </View>
      </View>
      <View style={styles.container}></View>
      <ScrollView style={styles.scrollView}></ScrollView>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  Head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Button: {},

  Maintext: {
    fontSize: 20,
    textAlign: 'center',
  },
  SubText: {
    fontSize: 10,
    textAlign: 'center',
    backgroundColor: '#ebedeb',
    color: '#afb0ae',
    width: 100,
    borderRadius: 20,
  },
});
