import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import ButtonComponent from '../componets/ButtonComponent/ButtonComponent';
import SafeAreaWrapper from '../componets/SafeAreaWrapper/SafeAreaWrapper';
import TextInputComponents from '../componets/TextInputComponents/TextInputComponents';

const Login = () => {
  return (
    <SafeAreaWrapper>
        <Text style={styles.txt}>Create new account</Text>
      <View style={styles.container} >
        <TextInputComponents Textinput={'Full name'} />
        <TextInputComponents Textinput={'Phone number'} />
        <TextInputComponents Textinput={'E-mail'} />
        <TextInputComponents Textinput={'Password'} />
        <ButtonComponent
          label={'Sign Up'}
          tapOn={() => {
            alert('You tapped the Login button!');
          }}
          btnStyle={{backgroundColor: '#f75276',marginTop: 20}}
        />
      </View>
    </SafeAreaWrapper>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignItems:"center",
  
  },
  txt: {
    color: '#f75276',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
    marginHorizontal: 10
  },
});
