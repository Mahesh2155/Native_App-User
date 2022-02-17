import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HelloWorldApps = () => {
  return (
    <View style={styles.textHeading}>
      <Text style={{color: 'red'}}>First App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    alignItems: 'center',
  },
});

export default HelloWorldApps;
