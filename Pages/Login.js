import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ButtonComponent from '../componets/ButtonComponent/ButtonComponent';
import SafeAreaWrapper from '../componets/SafeAreaWrapper/SafeAreaWrapper';
import TextInputComponents from '../componets/TextInputComponents/TextInputComponents';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaWrapper>
      <View style={styles.container}>
        <Text style={styles.txt}>Sign In</Text>
        <TextInputComponents containerStyle={{marginTop:50}} Textinput={'E-mail or phone number'} />
        <TextInputComponents Textinput={'Password'} />

        <ButtonComponent
          label={'login'}
          tapOn={() => {
            navigation.navigate('HomePage');
            
          }}
          btnStyle={{backgroundColor: '#f75276'}}
        />

        <Text style={styles.txt1}>OR</Text>

        <ButtonComponent
          label={'Login with Facebook'}
          tapOn={() => {
            navigation.navigate('CoffeePage')
          }}
          btnStyle={{backgroundColor: '#619cfa'}}
        />
      </View>
    </SafeAreaWrapper>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15
  },
  txt: {
    color: '#f75276',
    fontWeight: 'bold',
    fontSize: 35,
    paddingTop: 20,
    // padding: 20,
    // margin: 50,
  },
  txt1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
    paddingVertical: 20
  },
});
