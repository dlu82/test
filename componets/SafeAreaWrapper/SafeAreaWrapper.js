import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SafeAreaWrapper = props => {
  return <View style={styles.container}>{props.children}</View>;
};

export default SafeAreaWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
