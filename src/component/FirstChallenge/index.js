import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FirstChallenge = () => {
  const creatName = 'mahesh saini';
  return (
    <View>
      <Text style={styles.textStyleOne}>
        Welcome to my first React-Native challenge
      </Text>
      <Text style={styles.textStyleTwo}>This is my first textArea</Text>
      <Text style={styles.textStyleThree}>Hi my Name is {creatName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleOne: {
    fontSize: 30,
    color: 'red',
    fontWeight: 'bold',
  },
  textStyleTwo: {
    fontSize: 20,
  },
  textStyleThree: {
    fontSize: 15,
  },
});

export default FirstChallenge;
