import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import ButtonComponent from '../componets/ButtonComponent/ButtonComponent';
import SafeAreaWrapper from '../componets/SafeAreaWrapper/SafeAreaWrapper';
import {useNavigation} from '@react-navigation/native';

const Intro = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text style={styles.MainText}>Say hello to your new app</Text>

        <ButtonComponent
          label={'Login'}
          tapOn={() => {
            navigation.navigate('Login');
          }}
          btnStyle={{
            backgroundColor: '#f75276',
            marginTop: 50,
            marginBottom: 20,
          }}
          txtStyle={styles.text}
        />

        <ButtonComponent
          label={'SignUp'}
          tapOn={() => {
            navigation.navigate('Signin');
          }}
          btnStyle={{borderWidth: 3, borderColor: '#f75276'}}
          txtStyle={{color: '#f75276'}}
        />
        <ButtonComponent
          label={'forget Password'}
          tapOn={() => {
            alert('you tapped forget password ');
          }}
          txtStyle={{color: '#f75276'}}
        />
      </View>
    </SafeAreaWrapper>
  );
};
export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  MainText: {
    color: '#f75276',
    fontWeight: 'bold',
    fontSize: 35,
    marginTop: 150,
    textAlign: 'center',
  },
});
